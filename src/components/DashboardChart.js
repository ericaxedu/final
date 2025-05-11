import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const DashboardChart = () => {
  const [userCount, setUserCount] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');
      const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');

      setUserCount(users.data.length);
      setPostCount(posts.data.length);
      setCommentCount(comments.data.length);
    };

    fetchData();
  }, []);

  const chartOptions = {
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: ['Users', 'Posts', 'Comments']
    }
  };

  const chartSeries = [
    {
      name: 'Count',
      data: [userCount, postCount, commentCount]
    }
  ];

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default DashboardChart;
