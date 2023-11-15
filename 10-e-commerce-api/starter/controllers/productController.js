
const createProduct = async (req,res) => {
  res.send('createproduct')  
}

const getAllProducts = async (req,res) => {
    res.send('all products')  
  }

  const getSingleProduct = async (req,res) => {
    res.send('single product')  
  }

  const updateProduct = async (req,res) => {
    res.send('update product')  
  }

  const deleteProduct = async (req,res) => {
    res.send('delete product')  
  }
  const uploadImage = async (req,res) => {
    res.send('uploadimage')  
  }

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage,
  };