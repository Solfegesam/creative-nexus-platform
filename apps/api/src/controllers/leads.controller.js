const prisma = require("../config/db");

// Create Lead
const createLead = async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        service,
        budget,
        message,
      },
    });

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create lead",
    });
  }
};

// Get All Leads
const getLeads = async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      data: leads,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
    });
  }
};

module.exports = {
  createLead,
  getLeads,
};