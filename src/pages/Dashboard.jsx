import { useState, useEffect } from "react";
import NewsForm from "../components/NewsForm";
import NewsTable from "../components/NewsTable";

function Dashboard() {
  const [newsList, setNewsList] = useState([]);
  const [editNews, setEditNews] = useState(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const savedNews =
      JSON.parse(localStorage.getItem("NewsDetails")) || [];

    setNewsList(savedNews);
  }, []);

  const filteredNews = newsList.filter((news) => {
    const matchesSearch = news.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "" ||
      news.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Daily News Management Dashboard
      </h2>

      <NewsForm
        newsList={newsList}
        setNewsList={setNewsList}
        editNews={editNews}
        setEditNews={setEditNews}
      />

      <div className="card p-4 mb-4">
        <h4 className="mb-3">Search & Filter</h4>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by News Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-control"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <NewsTable
        newsList={filteredNews}
        setNewsList={setNewsList}
        setEditNews={setEditNews}
      />
    </div>
  );
}

export default Dashboard;