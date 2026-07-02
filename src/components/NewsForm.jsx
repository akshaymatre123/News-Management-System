import { useState, useEffect } from "react";

function NewsForm({
  newsList,
  setNewsList,
  editNews,
  setEditNews,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    region: "",
    status: "Active",
    language: "",
    city: "",
    country: "",
    bannerImage: null,
    video: null,
  });

  useEffect(() => {
    if (editNews) {
      setFormData(editNews);
    }
  }, [editNews]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];

    
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5 MB");
        return;
      }

     
      if (
        name === "bannerImage" &&
        !file.type.startsWith("image/")
      ) {
        alert("Please upload a valid image file");
        return;
      }

     
      if (
        name === "video" &&
        !file.type.startsWith("video/")
      ) {
        alert("Please upload a valid video file");
        return;
      }

      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editNews) {
      const updatedNewsList = newsList.map((item) =>
        item.id === editNews.id
          ? {
              ...formData,
              id: editNews.id,
              createdOn: editNews.createdOn,
              createdBy: editNews.createdBy,
              updatedOn: new Date().toLocaleString(),
              updatedBy: "Akshay",
            }
          : item
      );

      setNewsList(updatedNewsList);

      localStorage.setItem(
        "NewsDetails",
        JSON.stringify(updatedNewsList)
      );

      alert("News Updated Successfully");
    } else {
      const newNews = {
        id: Date.now(),
        ...formData,
        createdOn: new Date().toLocaleString(),
        updatedOn: new Date().toLocaleString(),
        createdBy: "Akshay",
        updatedBy: "Akshay",
      };

      const updatedNewsList = [...newsList, newNews];

      setNewsList(updatedNewsList);

      localStorage.setItem(
        "NewsDetails",
        JSON.stringify(updatedNewsList)
      );

      alert("News Added Successfully");
    }

    setFormData({
      title: "",
      description: "",
      category: "",
      date: "",
      region: "",
      status: "Active",
      language: "",
      city: "",
      country: "",
      bannerImage: null,
      video: null,
    });

    setEditNews(null);
  };

  return (
    <div className="card p-4 mb-4">
      <h4 className="mb-3">
        {editNews ? "Edit News" : "Add News"}
      </h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="News Title"
          className="form-control mb-3"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="News Description"
          className="form-control mb-3"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="form-control mb-3"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          className="form-control mb-3"
          value={formData.date}
          onChange={handleChange}
        />

        <select
          name="status"
          className="form-control mb-3"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <input
          type="text"
          name="region"
          placeholder="Region"
          className="form-control mb-3"
          value={formData.region}
          onChange={handleChange}
        />

        <input
          type="text"
          name="language"
          placeholder="Language"
          className="form-control mb-3"
          value={formData.language}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="form-control mb-3"
          value={formData.city}
          onChange={handleChange}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          className="form-control mb-3"
          value={formData.country}
          onChange={handleChange}
        />

        <label className="form-label">Banner Image</label>
        <input
          type="file"
          name="bannerImage"
          className="form-control mb-3"
          accept="image/*"
          onChange={handleChange}
        />

        <label className="form-label">News Video</label>
        <input
          type="file"
          name="video"
          className="form-control mb-3"
          accept="video/*"
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          {editNews ? "Update News" : "Add News"}
        </button>
      </form>
    </div>
  );
}

export default NewsForm;