import { useState } from "react";
import { toast } from "react-toastify";
import { Title } from "../../layout/Title"
import api from "../../api";
import "./styles.css";
import { PacmanLoader } from "react-spinners";

export const FileForm = () => {

  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (file) {
      const data = new FormData();
      data.append("txt", file);
      setLoading(true);
      await api.postFileUpload(data).then(() => {
        toast.success("File Uploaded!");
      }).finally(() => setLoading(false))
    }
  }

  return (
    <main className="container cards">
      <Title title="Add a file" subtitle="choose a file to upload" />
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <input onChange={handleFileChange} type="file" name="txt" />
          <button>Send</button>
        </div>
        <PacmanLoader loading={loading}></PacmanLoader>
      </form>
    </main>
  )
}
