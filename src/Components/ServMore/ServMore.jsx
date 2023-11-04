import React from 'react'
import { Link } from 'react-router-dom'

export default function ServMore() {
    return <>
        <div class="container-xxl py-5">
            <div class="container py-5">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="mb-5">LCL / FCL / Break Bulk / Reefers </h1>
                </div>
                <div class="row g-4">
                    <div class="col-md-6  wow fadeInUp" data-wow-delay="0.3s">
                        <div class="price-item">
                            <div class="border-bottom p-4 mb-4">
                                <h5 class="text-danger mb-1">Full Container Loads (FCL)</h5>

                            </div>
                            <div class="p-4 pt-0">
                                <p>
                                    FCL shipping is the most efficient and cost effective container shipping
                                    method. FCL involves one shipper and one consignee – meaning you do
                                    not share space in the container with other shippers. In order to simplify
                                    the process and reduce risk, many shippers choose to ship FCL while not
                                    actually filling the container to capacity.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6  wow fadeInUp" data-wow-delay="0.3s">
                        <div class="price-item">
                            <div class="border-bottom p-4 mb-4">
                                <h5 class="text-danger mb-1">Less than Container Load (LCL)</h5>

                            </div>
                            <div class="p-4 pt-0">
                                <p>

                                    When shippers do not have enough cargo to fill an entire 20 foot or 40
                                    foot container, we recommend less-than-container load shipping. LCL
                                    refers to consolidated shipments of loose cargo that are typically boxed,
                                    palletized or crated. LCL is typically cheaper due to the cost of the full
                                    container being shared between multiple shippers – however, the rate per
                                    equivalent weight of an LCL shipment will be much higher than a full
                                    container load (FCL). Despite sharing a container with other shippers,
                                    LCL still allows visibility and control over your cargo.

                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6  wow fadeInUp" data-wow-delay="0.3s">
                        <div class="price-item">
                            <div class="border-bottom p-4 mb-4">
                                <h5 class="text-danger mb-1"> Refrigerated Containers (Reefers)</h5>

                            </div>
                            <div class="p-4 pt-0">
                                <p>

                                    A reefer container is a special type of container equipped with a
                                    refrigerated motor. This allows for the transportation of sensitive goods
                                    that may need controlled temperatures such as fruits, vegetables, dairy
                                    products, meat, chocolate, wine, pharmaceuticals and chemicals.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6  wow fadeInUp" data-wow-delay="0.3s">
                        <div class="price-item">
                            <div class="border-bottom p-4 mb-4">
                                <h5 class="text-danger mb-1"> Break Bulk Cargo</h5>

                            </div>
                            <div class="p-4 pt-0">
                                <p>

                                    Break bulk shipping refers to cargo that must be loaded onto a vessel
                                    individually, rather than in a shipping container. Break bulk cargo will not
                                    fit into a container due to its large size or weight. We will take care of
                                    your break bulk shipment, including heavy machinery, large equipment,
                                    and infrastructure building supplies, granite blocks, rolling stock, oil well
                                    supplies, and other various types of project cargo. Our skilled operations
                                    team will take your cargo from door-to-door regardless of any special
                                    needs you may have.
                                </p>

                            </div>
                        </div>
                    </div>



                </div>
                
                <div className="text-center my-5">
                <h2>Get a free detailed quote with just a few clicks!</h2>
                <Link to="/contact" className="btn btn-danger my-2 py-3 px-5">Free Quote</Link>
                </div>

            </div>
        </div>
    </>
}
