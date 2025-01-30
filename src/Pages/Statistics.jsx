import { useEffect, useState } from "react";
import {  Container, Tooltip } from "react-bootstrap";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Scatter,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/gadgets.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Fetched data is not an array:", data);
          setProducts([]);
        }
      });
  }, []);

 

  const chartData =
    products.length > 0
      ? products.map((product) => ({
          product_name: product.product_title || "Unknown Product",
          price: product.price || 0,
          total: product.price ? product.price * 1.1 : 0,
          rating: product.rating || 0,
        }))
      : [];

  return (
    <>
      <div>
        <div className="py-5" style={{ backgroundColor: "#9538E2" }}>
          <Container>
            <h2 className="text-center text-light ">Statistics</h2>
            <p className="text-center text-light  ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!.
            </p>
          </Container>
        </div>
      </div>
      <Container className="my-5 py-5">
        <h3>Statistics</h3>
        <div className="my-5 py-5 rounded shadow">
          <ResponsiveContainer width="100%" height={450} className=" p-2">
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                fill="#D8BFD8"
                stroke="#D8BFD8"
              />
              <Bar dataKey="price" barSize={30} fill="#7B1FA2" />
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};

export default Statistics;
