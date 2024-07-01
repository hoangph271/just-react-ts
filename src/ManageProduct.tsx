import { type ColumnType } from 'antd/es/table'
import './index.css'
import { Table, Space, Button } from "antd"

type Product = {
  id: string,
  category: string,
  categoryId: string,
  price: number,
  nameProduct: string,
  description: string,
  quantity: number,
  image: string,
}

const products: Product[] = [
  {
    id: 'clxqe023n0001642g500anxnv',
    categoryId: 'clxqdzfuc0000642gs8xlu7dq',
    nameProduct: 'Son bong 1',
    price: 200,
    description: 'Son bong 1',
    quantity: 2000,
    image: 'image',
    category: 'Son bong',
  },
  {
    id: 'clxqe023n0001642g500anxnx',
    categoryId: 'clxqdzfuc0000642gs8xlu7dq',
    nameProduct: 'Son bong 2',
    price: 300,
    description: 'Son bong 2',
    quantity: 3000,
    image: 'image',
    category: 'Son bong',
  }
]

function ManageProduct() {
  const handleUpdateProduct = (product: Product) => {
    console.info(product)
  }

  const columns: ColumnType<Product>[] = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'nameProduct',
      key: 'nameProduct',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => <div>{price} </div>
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, product: Product) => (
        <Space size="middle" >
          <Button onClick={() => handleUpdateProduct(product)}> 
            Update
          </Button>
          <Button>
            Delete
            </Button>
        </Space>
      ),
    },
  ]

  return (
    <div className='ManageProduct' >
      <Table columns={columns} dataSource={products} />
    </div>
  )
}

export default ManageProduct
