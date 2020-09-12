import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <section className="backtoTop">
                <a href="#">back to Top</a>
            </section>
            <div className="footer__wrapperLinkLists">
                <section className="footer__linkLists">


                    <div className="footer__listOne">
                        <div className="footer__listTitle">get to know us</div>
                        <ul>
                            <li><a href='#'>careers</a></li>
                            <li><a href='#'>about us</a></li>
                            <li><a href='#'>uk modern slavery statment</a></li>
                            <li><a href='#'>sustainability</a></li>
                        </ul>
                    </div>
                    <div className="footer__listTwo">
                        <div className="footer__listTitle">make money with us</div>
                        <ul>
                            <li><a href="#">sell on amazon</a></li>
                            <li><a href="#">sell under private brands</a></li>
                            <li><a href="#">sell on amazon business</a></li>
                            <li><a href="#">sell on amazon handmade</a></li>
                            <li><a href="#">sell your sercices on amazon</a></li>
                            <li><a href="#">associates programme</a></li>
                            <li><a href="#">fulfillment by amazon</a></li>
                            <li><a href="#">seller fulfillment prime</a></li>
                            <li><a href="#">advertise your products</a></li>
                            <li><a href="#">independently publish with us</a></li>
                            <li><a href="#">amazon pay</a></li>
                            <li><a href="#">host an amazon hub</a></li>
                            <li><a href="#">> see all</a></li>
                        </ul>
                    </div>
                    <div className="footer__listThree">
                        <div className="footer__listTitle">amazon payment methods</div>
                        <li><a href="#">amazon platinum mastercard</a></li>
                        <li><a href="#">amazon calssic mastercard</a></li>
                        <li><a href="#">amazon money store</a></li>
                        <li><a href="#">gift cards</a></li>
                        <li><a href="#">amazon currency converter</a></li>
                        <li><a href="#">payment methods help</a></li>
                        <li><a href="#">shop with points</a></li>
                        <li><a href="#">top up your account</a></li>
                        <li><a href="#">top up your account in store</a></li>
                    </div>
                    <div className="footer__listFour">
                        <div className="footer__listTitle">let us help you</div>
                        <li><a href="#">covid-19 and amazon</a></li>
                        <li><a href="#">track packages or view orders</a></li>
                        <li><a href="#">delivery rates and policies</a></li>
                        <li><a href="#">amazon prime</a></li>
                        <li><a href="#">returns and replacements</a></li>
                        <li><a href="#">recycling</a></li>
                        <li><a href="#">manage your content and devices</a></li>
                        <li><a href="#">amazon mobile app</a></li>
                        <li><a href="#">amazon assistant</a></li>
                        <li><a href="#">customer service</a></li>
                    </div>
                </section>
            </div>
            <div className="horizontalRule"></div>
            <div className="footer__wrapperLinkLists">

                <section className="footer__countries">
                    <div className="footer__amazonLogo">
                        <img src="/assets/amazon.png" alt="logo" />
                    </div>
                    <ul className="footer__countriesList">
                        <li><a href="#">autralia</a></li>
                        <li><a href="#">brazil</a></li>
                        <li><a href="#">canada</a></li>
                        <li><a href="#">china</a></li>
                        <li><a href="#">france</a></li>
                        <li><a href="#">germany</a></li>
                        <li><a href="#">india</a></li>
                        <li><a href="#">italy</a></li>
                        <li><a href="#">japan</a></li>
                        <li><a href="#">mexico</a></li>
                        <li><a href="#">netherlands</a></li>
                        <li><a href="#">singapore</a></li>
                        <li><a href="#">spain</a></li>
                        <li><a href="#">turkey</a></li>
                        <li><a href="#">united arab emirates</a></li>
                        <li><a href="#">united states</a></li>
                    </ul>
                </section>
            </div>


            <ul className="footer__smallPrint">
                <li><a href="#">conditions of use & sale</a></li>
                <li><a href="#">privacy notice</a></li>
                <li><a href="">cookies notice</a></li>
                <li><a href="#">interest-based ads notice</a></li>
                <li><a href="#">Amazon Clone created by Ejiro Lennox Akpoduado</a></li>
            </ul>
        </div>
    )
}

export default Footer
