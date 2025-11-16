import { Button, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";
import axios from "axios";

const InfoForm = () => {
    const API = import.meta.env.VITE_API_BASE_URL;
    const handleSubmit = async () => {
        try {
        const response = await axios.get(`${API}/api/userData`);
        console.log(response);
        } catch (error) {
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
                        fontSize: "clamp(1.3rem, 3vw, 2rem)",  // ⬅ Smaller font
                    }}
                >
                    Contact
                </Card.Title>

                <Form>
                    <Form.Group className="mb-2">
                    <Form.Label className="text-white small">Email address</Form.Label>
                    <Form.Control size="sm" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-white small">Password</Form.Label>
                    <Form.Control size="sm" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" size="sm" onClick={handleSubmit} className="w-100">
                    Submit
                    </Button>
                </Form>
                </Card>
            </div>
        </div>
    );
};


export default InfoForm;
