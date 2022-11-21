import React from "react";
const Footer = () => {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="page-footer font-small blue pt-4 Footer1">

                {/* <!-- Footer Links --> */}
                <div className="container-fluid text-center text-md-left">

                    {/* <!-- Grid row --> */}
                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 mt-md-0 mt-3">

                            {/* <!-- Content --> */}
                            <h5 className="text-uppercase">Pension Disbursing Agency/Sanctioning Authority</h5>
                            {/* <p>Here you can use rows and columns to organize your footer content.</p> */}

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none pb-3"/>

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 mb-md-0 mb-3">

                                {/* <!-- Links --> */}
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">Help</a>
                                    </li>
                                    <li>
                                        <a href="#">Website Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Feedback</a>
                                    </li>
                                </ul>

                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                           
                            {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Links --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="/"> Timespro </a>
                </div>
                {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}
export default Footer;