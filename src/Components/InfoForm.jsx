import { Button, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const InfoForm = () => {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [age, setAge] = useState("")
    const [loading, setLoading] = useState(false)
  const API = import.meta.env.VITE_API_BASE_URL;
  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${API}/api/userData`, {
        name: name,
        contact: contact,
        age: age,
      });
      setName("")
      setContact("")
      setAge("")
      setLoading(false)
      toast.success("Submission completed successfully.", {
          position: "top-right",
          autoClose: 3000,
        });
        console.log(response);
    } catch (error) {
        setLoading(false)
        toast.error("Failed to submit data.");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/img/community.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <NavBar />

      {/* Content */}
      <div
        className="flex-grow-1 d-flex justify-content-center align-items-center"
        style={{
          padding: "10px",
          backdropFilter: "blur(2px)",
        }}
      >
        <Card
          className="bg-dark bg-opacity-75 p-3 rounded-4 shadow-lg"
          style={{
            width: "100%",
            maxWidth: "500px",        // ⬅ Reduced width
            maxHeight: "65vh",        // ⬅ Reduced height
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          <Card.Title
            as="h1"
            className="text-center mb-3 text-uppercase"
            style={{
              color: "#00ffff",
              letterSpacing: "1px",
              fontSize: "clamp(1.3rem, 3vw, 2rem)", // ⬅ Smaller font
            }}
          >
            Contact
          </Card.Title>

          <Form>
            <Form.Group className="mb-2">
              <Form.Control value={name} size="sm" type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control value={contact} size="sm" type="text" placeholder="Enter Contact" onChange={(e) => setContact(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control value={age} size="sm" type="number" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)}/>
            </Form.Group>

            <Button
              variant="primary"
              size="sm"
              onClick={handleSubmit}
              className="w-100"
              disabled={loading}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default InfoForm;
