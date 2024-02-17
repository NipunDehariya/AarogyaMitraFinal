import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
export default function AddHistory() {


 
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('email', email);
    formData.append('username', username);

    axios.post('http://localhost:5000/api/upload-pdf', formData)
      .then(response => {
        setMessage(response.data.message);
        setFile(null);
        setEmail('');
        setUsername('');
      })
      .catch(error => {
        console.error(error);
        setMessage('Failed to upload PDF');
      });
  };



  // const [pdfUrl, setPdfUrl] = useState('');

  // useEffect(() => {
  //   const fetchPDFUrl = async () => {
  //     try {
  //       const response = await axios.get('https://api.cloudinary.com/v1_1/dihzn8jze');
  //       setPdfUrl(response.data.url);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchPDFUrl();
  // }, []);

  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    fetchDownloads();
  }, []);

  const fetchDownloads = async () => {
    try {
      const response = await axios.get('http://localhost:5000/downloads');
      const { data } = response;
      setDownloads(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return <>


  

  <div className='container d-flex justify-content-center align-items-center'>
  <form className='form-control '  onSubmit={handleSubmit}>
      <div >
        <label>
          Email:
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          PDF:
          <input type="file" accept="application/pdf" onChange={event => setFile(event.target.files[0])} />
        </label>
      </div>
      <button type="submit">Upload PDF</button>
      <div>{message}</div>
    </form>
  </div>

  <div>
      <h1 className='d-flex justify-content-center align-items-center'>Medical Reportes </h1>
      <table>
        <thead>
          <tr>
            <th>Public ID</th>
            <th>URL</th>
            <th>Format</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((download) => (
            <tr key={download.publicId}>
              <td>{download.publicId}</td>
              <td>{download.url}</td>
              <td>{download.format}</td>
              <td>{download.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Link to = '/Dashbord'>  
    <button className='btn btn-outline-success mt-3 d-grid gap-2 mx-auto my-3'>
      Back 
     </button> </Link>
    
  </>

}
