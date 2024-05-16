const Contact = require('../models/contact');

const contactController = {


  sendMessage: async (req, res) => {
    try {
        const { fullName, email, phone, message } = req.body;

        if (!fullName || !email || !phone || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format.' });
        }

        // Validate phone format (assuming a simple format like XXX-XXX-XXXX)
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ error: 'Invalid phone number format. Use XXX-XXX-XXXX.' });
        }

        const ip = req.ip; 
        const currentDate = new Date();

        const messagesFromSameCombination = await Contact.countDocuments({
            $or: [
            { ip, date_created: { $gte: new Date(currentDate.setHours(0, 0, 0, 0)), $lt: new Date(currentDate.setHours(23, 59, 59, 999)) } },
            { email, date_created: { $gte: new Date(currentDate.setHours(0, 0, 0, 0)), $lt: new Date(currentDate.setHours(23, 59, 59, 999)) } },
            { phone, date_created: { $gte: new Date(currentDate.setHours(0, 0, 0, 0)), $lt: new Date(currentDate.setHours(23, 59, 59, 999)) } },
            ],
        });

        const maxMessagesFromSameCombination = 2;

        if (messagesFromSameCombination >= maxMessagesFromSameCombination) {
            return res.status(429).json({ error: 'Too many messages from the same IP, email, or phone' });
        }
        const contact = new Contact({
            fullName,
            email,
            phone,
            message,
            ip
        });

         await contact.save();

        res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = contactController;
