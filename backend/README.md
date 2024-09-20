# 🧹 Swachhta Monitoring AI Backend

Welcome to the backend of the **Swachhta Monitoring AI** project! This system is part of a larger solution aimed at monitoring and analyzing pictorial data for Swachhta (cleanliness) and green LiFE practices within the Department of Posts (India).

---

## 🚀 Project Overview

The backend component is responsible for handling API requests, storing and retrieving data, and providing necessary endpoints for the frontend or mobile app to interact with.

### Key Features:
- API for uploading pictorial data (with geolocation and timestamp)
- Stores images and associated metadata in a database
- Analytics for monitoring cleanliness and green practices
- Provides data endpoints for dashboards and visualizations

---

## 🏗️ Technologies & Tools

- **Languages**: Python
- **Frameworks**: Flask
- **Other Tools**: Tensorflow, Numpy, Pandas, Matplotlib

---

## ⚙️ How to Set Up and Run the Project

### Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8 or above
- Tensorflow
- Flask
- Numpy
- Pandas
- Matplotlib

### 1. Clone the Repository

First, clone the repository to your local machine using Git.

```bash
git clone https://github.com/DevyManish/PS1751-SwachhtaMonitoringAI.git
```

### 2. Train Model

You need to install requirements.txt

```bash
pip install -r requirements.txt
```
Then Run The Second Command To Train The Model

```bash
python image_clasification.py
```
When you run this then it will show like that

[![Screenshot-from-2024-09-17-13-12-20.png](https://i.postimg.cc/W4Cwrwmk/Screenshot-from-2024-09-17-13-12-20.png)](https://postimg.cc/06GS1mBk)

When you compelete the model training then it will show you

```bash
Model is trained successfully!!!!!!
```
And you have a new file on your file structure name 

```bash
swachhta_model.h5
```
### 1. To Run And See Result

If you are trying to get api you need to run flask server and this is the command to run flask server

```bash
python app.py
```

If you want to run on streamlit the the command

```bash
streamlit run swacchat_monitoring.py
```

## ⚡ Fun Fact
This project is part of a broader initiative supporting the Swachh Bharat Abhiyan and promoting green practices across India!
