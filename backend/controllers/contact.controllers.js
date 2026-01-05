const Contact = require('../models/Contact.model');

// Create new contact/lead
exports.createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      organization,
      country,
      interest,
      message
    } = req.body;

    // Check if contact already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({
        status: 'error',
        message: 'A lead with this email already exists'
      });
    }

    // Create new contact
    const contact = await Contact.create({
      name,
      email,
      phone,
      organization,
      country,
      interest,
      message,
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
      pageUrl: req.headers.referer || 'Direct'
    });

    // Emit real-time notification via Socket.IO
    if (req.io) {
      req.io.emit('new_lead', {
        type: 'NEW_LEAD',
        data: contact,
        timestamp: new Date().toISOString()
      });
    }

    res.status(201).json({
      status: 'success',
      message: 'Thank you! We have received your request.',
      data: contact
    });

  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process your request. Please try again.'
    });
  }
};

// Get all contacts (with pagination and filters)
exports.getAllContacts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      priority,
      interest,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    let query = {};
    
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (interest) query.interest = interest;
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { organization: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Get total count
    const total = await Contact.countDocuments(query);
    
    // Get paginated data
    const contacts = await Contact.find(query)
      .sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.status(200).json({
      status: 'success',
      data: {
        contacts,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: parseInt(limit)
        }
      }
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contacts'
    });
  }
};

// Get single contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: contact
    });

  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contact'
    });
  }
};

// Update contact
exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update contact'
    });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete contact'
    });
  }
};

// Get contact statistics
exports.getContactStats = async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: null,
          total: { $sum: '$count' },
          byStatus: { $push: { status: '$_id', count: '$count' } }
        }
      },
      {
        $unwind: '$byStatus'
      },
      {
        $project: {
          _id: 0,
          status: '$byStatus.status',
          count: '$byStatus.count',
          percentage: {
            $multiply: [
              { $divide: ['$byStatus.count', '$total'] },
              100
            ]
          }
        }
      }
    ]);

    // Get counts by interest
    const interestStats = await Contact.aggregate([
      {
        $group: {
          _id: '$interest',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    // Get recent contacts (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentStats = await Contact.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    res.status(200).json({
      status: 'success',
      data: {
        byStatus: stats,
        byInterest: interestStats,
        recent: recentStats,
        total: await Contact.countDocuments()
      }
    });

  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch statistics'
    });
  }
};