import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';


function HomeA() {
    const [apidata, setdata] = useState([])
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        var result = await fetch("https://freetestapi.com/api/v1/laptops")
        //console.log(result)
        var data = await result.json()
        setdata(data)
    }

    console.log(apidata)
    return (

        <div>
            <br></br>
            <br></br>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {
                    apidata.map((item) =>
                        <MDBCol>
                            <MDBCard>

                                <center>
                                    <MDBCardImage
                                        src={item.image} style={{ width: "100px", height: "150px" }}
                                        alt='...'
                                        position='top'
                                    /></center>
                                <MDBCardBody>
                                    <MDBCardTitle>{item.id}</MDBCardTitle>
                                    <MDBCardTitle>{item.brand} Rs</MDBCardTitle>
                                    <MDBCardTitle>{item.model} Rs</MDBCardTitle>
                                    <MDBCardTitle>{item.release_year} Rs</MDBCardTitle>
                                    <MDBCardTitle>{item.processor}</MDBCardTitle>
                                    <MDBCardTitle>{item.ram}</MDBCardTitle>
                                    <MDBCardTitle>{item.storage}</MDBCardTitle>
                                    <MDBCardTitle>{item.display_size}</MDBCardTitle>
                                    <MDBCardTitle>{item.resolution}</MDBCardTitle>
                                    <MDBCardTitle>{item.graphics_card}</MDBCardTitle>
                                    <MDBCardTitle>{item.weight}</MDBCardTitle>
                                    <MDBCardTitle>{item.price}</MDBCardTitle>
                                    <MDBCardTitle>{item.colors}</MDBCardTitle>
                                    <MDBCardText>{item.description} </MDBCardText>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    )
                }



            </MDBRow>
        </div>
    )
}

export default HomeA
