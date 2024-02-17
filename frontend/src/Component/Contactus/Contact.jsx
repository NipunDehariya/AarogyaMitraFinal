import React from 'react'
import './contact.css'
export default function Contact() {
  return <>
  <section className='page-section'>
        <div className=' container'>
        <h2 class="page-section-heading text-center text-uppercase  mb-0">Contact US</h2>
        <div className='divider-custom'>
        <div class="divider-custom-line"></div>
        <div className='divider-custom-icon'>
        <i class="fa-solid fa-star fa-2x"></i>
        </div>
        <div class="divider-custom-line"></div>
        </div>
        <div class="row">
                    <div class="col-lg-8 mx-auto">
                         
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false"/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." aria-invalid="false"/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." aria-invalid="false"/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br/>
                            <div id="success"></div>
                            <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
        </div>
       </section>
  </>
}
