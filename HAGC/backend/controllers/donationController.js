exports.createDonation = async (req, res) => {
  try {
    const { donorId, isAnonymous, type, amount, method, items, message } = req.body;

    const newDonation = await Donation.create({
      donorId: isAnonymous ? null : donorId,
      isAnonymous,
      type,
      amount: type === 'cash' ? amount : undefined,
      method: type === 'cash' ? method : undefined,
      items: type === 'goods' ? items : [],
      message
    });

    res.status(201).json(newDonation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
