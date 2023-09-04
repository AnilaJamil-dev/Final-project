# METANOIA - MERN Stack
# Live URL
https://rich-cyan-grasshopper-tux.cyclic.app/
Welcome to METANOIA! This project is a full-stack application built using the MERN (MongoDB, Express, React, Node.js) stack. It aims to provide an E-Commerce Website for Premium Watches.
## Features
- **User Registration and Authentication System:** Users can register and log in securely.
- **Product Browsing:** Browse Watches by their categories, names, descriptions, and prices.
- **Cart and Checkout:** Easily add watches to your cart, adjust quantities, and proceed to a secure checkout, making your purchase process smooth and efficient.
- **Order Tracking:** Receive email notifications for order status and delivery updates.
- **Product Reviews and Ratings:** Users can share their feedback through reviews and ratings.
- **User Profiles:** Manage user profiles and view order history.

- **Admin Management:** Admin users have access to manage products, orders, and users, ensuring smooth operation and maintenance of the platform.

- **Responsive UI:** The application offers a responsive and user-friendly user interface.

# Technologies Used
#### 1.Frontend: React
#### 2.Backend: Express.js
#### 3.Database: MongoDB





## API Reference
#### Singup
```http
  POST /api/signup
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| username | `string` | **Required**. Enter username |
| email | `string` | **Required**. Enter Email |
| password | `string` | **Required**. Enter Password |

#### Login
```http
  POST /api/login
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| email      | `string` | **Required**. Enter Email |
| password | `string` | **Required**. Enter Password |

#### Delete User
```http
  DELETE /api/deleteuser/:email
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. User _id |

#### All User
```http
  GET /api/getallusers
```
   | Description                |
| :------------------------- |
| Display All User |

#### Update User

```http
  PUT /api/updateuser
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| Id | `string` | **Required**. User |

#### Create Category
```http
  POST /api/create-category
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| Category Name | `string` | **Required**. Name |
|Category Image| `string` | **Required**. Enter Image |

#### Category By id
```http
  GET /api/get-category-by-id/:_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. category _id |

#### All Category
```http
  GET /api/get-all-categories
```
| Description                |
| :------------------------- |
| Display All Categories |

#### Update Category 

```http
  PUT /api/update-category
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| Id | `string` | **Required**. Category |

#### Delete Category
```http
  DELETE /api/delete-category/:_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. category _id |


#### Create Brand
```http
  POST /api/create-brand
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| Brand Name | `string` | **Required**. Name |
| Brand Image| `string` | **Required**. Enter Image |

#### All Brand
```http
  GET /api/get-all-brands
```
| Description                |
| :------------------------- |
| Display All Brands |

#### Search Brands by id
```http
  GET /api/get-brand-by-Id/:_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. Brand _id |

#### Update Brand

```http
  PUT /api/update-brand
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| Id | `string` | **Required**. Brand |




#### Delete Brand
```http
  delete /api/delete-brand/:_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. Brand_id |

#### Create Products
```http
  POST /api/create-product
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ProductName | `string` | **Required**. Name |
| thumbnail| `string` | **Required**. Enter Image |
| Price| `string` | **Required**. Enter Price |
| description| `string` | **Required**. Enter description |
| category| `string` | **Required**. Enter category |
| Brand | `string` | **Required**. Enter brand |

#### All Product

```http
  GET /api/get-all-products
```
| Description                |
| :------------------------- |
| Display All product |


#### Product by Category
```http
  GET /api/get-product-by-category/:category
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| category   | `string` | provide category name |

#### Product by Brand
```http
  GET /api/get-product-by-brand/:brand
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| Brand | `string` | provide brand name |

#### Update Product

```http
  PUT /api/update-product
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| Id | `string` | **Required**. Product |




#### Delete Product 
```http
  DELETE /api/delete-product/:_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. Product _id |


