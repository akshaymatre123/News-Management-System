import { useState } from "react";

function NewsTable({ newsList, setNewsList, setEditNews }) {

    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 5;

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    const currentRecords = newsList.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(newsList.length / recordsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleDelete = (id) => {
        const updatedNews = newsList.filter(
            (item) => item.id !== id
        );

        setNewsList(updatedNews);

        localStorage.setItem(
            "NewsDetails",
            JSON.stringify(updatedNews)
        );

        alert("News Deleted Successfully");
    };

    return (
        <div className="card p-4">
            <h4 className="text-center mb-4">
                News Records
            </h4>

            <p>
                Total Records:{" "}
                <strong>{newsList.length}</strong>
            </p>

            <div className="table-responsive">
                <table className="table table-bordered table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Region</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Banner Image</th>
                            <th>Video</th>
                            <th>Created On</th>
                            <th>Updated On</th>
                            <th>Created By</th>
                            <th>Updated By</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentRecords.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="14"
                                    className="text-center"
                                >
                                    No News Available
                                </td>
                            </tr>
                        ) : (
                            currentRecords.map((news) => (
                                <tr key={news.id}>
                                    <td>{news.title}</td>
                                    <td>{news.category}</td>
                                    <td>{news.date}</td>
                                    <td>{news.status}</td>
                                    <td>{news.region}</td>
                                    <td>{news.city}</td>
                                    <td>{news.country}</td>

                                    <td>
                                        {news.bannerImage
                                            ? news.bannerImage.name
                                            : "-"}
                                    </td>

                                    <td>
                                        {news.video
                                            ? news.video.name
                                            : "-"}
                                    </td>

                                    <td>
                                        {news.createdOn || "-"}
                                    </td>

                                    <td>
                                        {news.updatedOn || "-"}
                                    </td>

                                    <td>
                                        {news.createdBy || "-"}
                                    </td>

                                    <td>
                                        {news.updatedBy || "-"}
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() =>
                                                setEditNews(news)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                handleDelete(news.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <button
                        className="btn btn-secondary me-2"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    <span className="mx-3">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        className="btn btn-secondary ms-2"
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default NewsTable;