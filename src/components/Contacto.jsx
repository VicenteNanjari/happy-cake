import Form from 'react-bootstrap/Form';

function Contacto() {
    return (
        <Form className='contacto'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comentarios</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
}

export default Contacto;