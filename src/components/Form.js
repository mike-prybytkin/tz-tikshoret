import { useRef } from 'react';
import {
    Container, Row, Form, Input, Button
} from 'reactstrap';

import formLogo from '../images/logo_white.webp';
import formLogoSubmit from '../images/logo_white.webp';
import productImage from '../images/product.webp'

function MyForm() {
    const hiddenRef = useRef(null)

    const api_url = '';
    const api_key = '';
    const offer_id = '';
    const country = '';
    const price = '';
    const ip_adds = '';
    // внутренний постбек
    const handleSubmit = (event) => {
        event.preventDefault();
        let request = `${api_url}?api_key=${api_key}&name=${event.target[0].value}&phone=${event.target[1].value}&clickid=${event.target[2].value}&offer_id=${offer_id}&country_code=${country}&price=${price}&base_url=${document.location.host}&ip=${ip_adds}&referrer=${document.location.host}`;
        console.log(request)

        fetch(request)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('Request successful', data);
                return data;
            })
            .catch(function(error) {
                console.log('Request failed', error)
            });
    }

    return (
        <Container className="mb-5 mt-3 py-3 order-form">
            <div className="w-100 d-flex order-form__header">
                <img src={formLogo} alt="formLogo"/>
            </div>
            <div className="order-form__body">
                <Row className="pt-2">
                    <div className="order-form__body_content">
                        <h1>FORMULARIO DE PEDIDO OFICIAL</h1>
                        <img id="order" src={productImage} className="img-fluid" alt="productImage"/>
                        <p className="order-form__body_content_remark">*El producto sólo está disponible a través de
                            este sitio web o de la compra directa en el convento. El costo en el convento es
                            de <strong>2600 córdobas</strong>, si se pide a través de la página web se puede obtener
                            el producto con un 50% de descuento al precio de <strong>1300 córdobas</strong>.</p>
                        <h1 className="text-center">
                            <span className="order-form__body_content_price">1300 NIO</span>
                            <span className="order-form__body_content_old_price">
                                <del> 2600 NIO</del>
                            </span>
                        </h1>
                    </div>
                </Row>
                <div className="row justify-content-center">
                    <div className="order-form__body_fields">
                        <Form onSubmit={handleSubmit}>
                            <Input type="hidden" name="clickid" value="{subid}" ref={hiddenRef}/>
                            <Input className="form-control form-control-lg my-3" type="text" name="name"
                                   autoComplete="name" placeholder="Nombre" required/>
                            <Input className="form-control form-control-lg my-3" type="tel" name="phone"
                                   autoComplete="tel" placeholder="Numero di cellulare" required/>
                            <Button className="fs-1 fw-bolder py-2 text-nowrap" type="submit">
                                <img src={formLogoSubmit} className="img-fluid" alt="formLogoSubmit"/>
                                    <span>|</span>
                                    <div className="order-form__body_fields_btn_text">
                                        <span className="text-uppercase">Pedir</span><br/>
                                        <span className="text-lowercase">con descuento</span>
                                    </div>
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <h2 className="order-form__bottom_remark">
                Al hacer una compra, no sólo experimentará los increíbles efectos rejuvenecedores, sino que también
                harás una importante contribución a nuestra misión
            </h2>
        </Container>
    )
}

export default MyForm