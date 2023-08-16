# Tokopedia-play-API-finalProject
This is repository for Tokopedia Play API (Generasi Gigih 3.0 final Project)

# Tokopedia Play API

    This is a `back-end service` for a Tokopedia Play clone app using Express.js. It utilizes MongoDB to store video, product images, and comments.
# Database Structure
- **Thumbnail:** Storing data for videoID, videoURL, PicsURL, and name.
- **Product:** storing data for title, price, productLink, picsURL, and videoID `(reference to thumbnail)`
- **comment:** storing data for username, replyComment, time (timestamp), and videoID `(reference to thumbnail)`

# API structure
The API is a `RESTful API` with endpoints for creating and retrieving thumbnail, Product, and Comment.

#API: Request & Response

1. Thumbnail
- GET `"/thumbnail"` (get all thumbnail data)
**Response**
```json
{
    "_id": "64c588730eeb1aff64e4b8fc",
    "picsURL": "roughneck.jpeg",
    "name": "Roughneck 1991",
    "videoURL": "https://www.youtube.com/embed/rjlUAV0rRnQ",
    "__v": 0
},
....
```

1. Product
- GET `"/product/:thumbsID"` (get all product data associated with thumbnail)
**Response**
```json
{
    "_id": "64c625e486bfaec480e56a0f",
    "title": "Roughneck 1991 Hoodie",
    "price": 145000,
    "ProductLink": "https://shopee.co.id/roughneck1991",
    "PicsURL": "RN1.jpg",
    "thumbsID": "64c588730eeb1aff64e4b8fc",
    "__v": 0
},
...
```

1. Comment
- GET `"/comment/:thumbsID"` (get all comment data associated with thumbnail)

**Response**
```json
{
    "_id": "64c66eab4f05215813b1d1e3",
    "username": "wildan",
    "replyComment": "High-quality product!",
    "thumbsID": "64c588730eeb1aff64e4b8fc",
    "time": "2023-07-30T14:07:39.850Z",
    "__v": 0
},
...
```
- POST `"/comment"` (create new comment data)
**Request**
```json
{
    "username": "wildan",
    "replyComment": "High-quality product!",
    "thumbsID": "64c588730eeb1aff64e4b8fc"
},
...
```
**Response**
```json
{
    "message": "data POST success!"
}
```

# How to Run Locally

follow this step:

1. Clone this repository to your local machine.
2. Navigate into the project directory: `cd project-directory`
Install the necessary dependencies: `npm install`
3. Setup environment variables by creating a .env file in the root directory. It should contain the following:
    ```
    PORT=3000
    MONGO_URL=your_mongodb_url
    ```
4. Replace `your_mongodb_url` with your actual MongoDB connection URL.
5. you should change connection in cors() at index.js (the detail instruction is inside file index.js)
1. Run the server: `npm start`
1. The server should now be running on: `http://localhost:5000`