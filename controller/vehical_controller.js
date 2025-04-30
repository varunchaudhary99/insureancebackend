

exports.carNumber = (req, res) => {
    const { carNumber } = req.body;
  
    
    const carNumberPattern = /^[A-Z]{2}-\d{2}-[A-Z]{2}-\d{4}$/;
    saveNumber(carNumber);
    if (!carNumber || !carNumberPattern.test(carNumber)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid car number. Please use format like DL-12-AB-2345'
        });
    }
  }

  exports.getCarBrands = async (req, res) => {
    try {
      const brands = await CarBrand.find();
      res.json(brands);
    } catch (err) {
      res.status(500).json({
        message: "Error fetching car brands",
        error: err.message
      });
    }
  };
  