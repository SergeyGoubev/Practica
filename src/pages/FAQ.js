import React from 'react';
import ShopTerms from '../components/FAQ/ShopTerms';
import FAQtoc from '../components/FAQ/FAQtoc.js';

function FAQ() {
    return (
          <section id="form">
              <div className='container'>
                  <div className="col-sm-auto">
                      <h2>Shop Terms & Conditions</h2>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <ShopTerms />
                    </div>
                    <div className="col-sm-5">
                    </div>
                    <div className="col-sm-1">
                      <FAQtoc />
                    </div>
                  </div>
              </div>
          </section>
    );
  }

export default FAQ;