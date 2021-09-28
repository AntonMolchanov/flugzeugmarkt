import React, {useState} from "react";
import {Formik, Form, Field, useField, ErrorMessage} from "formik";
import {
    Card,
    CardContent,
    MenuItem,
    TextField,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Box,
    Button,
    Typography
} from "@material-ui/core";
import {boolean,number,object,string,array,mixed} from "yup";
import './../checkout.scss'
import {useDispatch, useSelector} from "react-redux";
import {cartOperations, cartSelectors} from "../../../../../../redux/features/cart/index";

const initialValues = {
    name: "",
    familyName: "",
    age: "",
    address: "",
    mobile: "",
    comments: "",
    acceptedTermsAndConditions: ""
}

function CheckoutForm(props) {

    const [checkedOut, setCheckedOut] = useState(false)
    const [formDisplayed, setFormDisplayed] = useState(true)
    const totalPrice = useSelector(cartSelectors.cart).totalPrice
    const dispatch = useDispatch()

    return (
        <div className="form">
            {formDisplayed && <Card>
                <CardContent>
                    <Typography variant="h4">Kasse</Typography>
                    <Formik
                        validationSchema={
                            object({
                                name: string().required("Das Ausfüllen des Textfeldes Name ist zwingend erforderlich.").min(2, "Zu kurz").max(100, "Zu lang"),
                                familyName: string().required("Das Ausfüllen des Textfeldes Nachname ist zwingend erforderlich.").min(2,"Zu kurz").max(100, "Zu lang"),
                                age: number().required().min(21, "Sie müssen älter als 20 sein").max(100, "Sie müssen jünger als 100 sein"),
                                address: string().required("Das Ausfüllen des Textfeldes Addresse ist zwingend erforderlich.").min(10, "Zu kurz").max(100, "Zu lang"),
                                mobile: number().required("Das Ausfüllen des Textfeldes Handynummer ist zwingend erforderlich.").min(12, "Zu kurz"),
                                acceptedTermsAndConditions: boolean().oneOf([true], "Sie müssen Geschäftsbedingungen zustimmen")
                            })
                        }
                        initialValues={initialValues} onSubmit={(values, formikHelpers)=>{
                        console.log(values)
                        setCheckedOut(true)
                        setFormDisplayed(false)
                        dispatch(cartOperations.checkedOut([]))
                    }}>
                        {({values, errors, touched}) => (
                            <Form>
                                <Box marginTop={4}>
                                    <FormGroup>

                                        <Field name="name" as={TextField} label="Name"/>
                                        <ErrorMessage name="name"/>

                                        <Field name="familyName" as={TextField} label="Nachname"/>
                                        <ErrorMessage name="familyName"/>

                                        <Field name="age" type="number" as={TextField} label="Alter"/>
                                        <ErrorMessage name="age"/>

                                        <Field name="address" as={TextField} label="Addresse"/>
                                        <ErrorMessage name="address"/>

                                        <Field name="mobile" as={TextField} label="Handynummer"/>
                                        <ErrorMessage name="mobile"/>

                                    </FormGroup>
                                </Box>
                                <Box marginBottom={4}>
                                    <FormGroup>

                                        <Field name="comments" as={TextField} multiline rows={1} rowsMax={5} label="Kommentare zur Bestellung"/>
                                        <FormControlLabel control={ <Field name="acceptedTermsAndConditions" as={Checkbox} color="primary"/>} label={"Geschäftsbedingungen zugestimmt"}/>
                                        <ErrorMessage name="acceptedTermsAndConditions"/>

                                    </FormGroup>
                                </Box>
                                <p>Your total price is ${totalPrice} USD</p>

                                <button type='submit' className="checkout-btn">Kaufen</button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>}
            {checkedOut && <div className="checkedOut">Ihre Bestellung wurde schon versendet</div>}
        </div>
    );
}

export default CheckoutForm;