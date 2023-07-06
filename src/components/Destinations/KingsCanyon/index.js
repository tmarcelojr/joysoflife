import { Link } from 'react-router-dom'

export default function KingsCanyon() {
    return (
        <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <img
            class="card-img-top"
            src="https://peakvisor.com/img/news/kings-canyon.jpg"
            alt="Kings Canyon"
          />
          <div class="card-body">
            <h5 class="main-title text-center">Kings Canyon</h5>
            <div class="border rounded-sm p-3">
              <p>
                <small>
                  Kings Canyon is special because it's one of the few highlights
                  in the red centre of the Northern Territory. Millions of years
                  ago the canyon was once a valley before the red sandstone
                  experienced years of erosion. After 400 million years of
                  erosion, Kings Canyon eventually became the red sandstone
                  canyon we see today.
                </small>
              </p>
              <p>
                <small>
                  Address:
                  <a
                    href="http://maps.apple.com/?daddr=86728+California+180,+Kings+Canyon+National+Park,+CA+93633&dirflg=d&t=m"
                    >Kings Canyon National Park, CA 93271</a
                  >
                </small>
              </p>
              <p>
                <small
                  >Fees: Annual Pass $70 or daily $35. Already have pass.</small
                >
              </p>
            </div>

            <div
              class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column"
            >
              <div class="vertical-timeline-item vertical-timeline-element">
                <div>
                  <span class="vertical-timeline-element-icon bounce-in">
                    <i class="badge badge-dot badge-dot-xl badge-success"></i>
                  </span>

                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">Depart from Visalia</h4>
                    <p>
                      The drive takes approximately 1.5 to 2 hours depending on
                      traffic.
                    </p>
                    <span class="vertical-timeline-element-date">8:00 AM</span>
                  </div>

                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">
                      Arrive at Grant Grove Visitor Center
                    </h4>
                    <p>
                      Obtain maps, information, and any necessary permits from
                      the visitor center.
                    </p>
                    <span class="vertical-timeline-element-date">9:45 AM</span>
                  </div>

                  {/* <!-- General Grant Tree --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">General Grant Tree Trail</h4>
                    <img
                      class="img-fluid"
                      src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/212000/212353-General-Grant-Tree-Trail.jpg"
                      alt="General Grant Tree"
                    />
                    <p>
                      Located near the visitor center and showcases the General
                      Grant Tree, one of the world's largest living trees.
                    </p>
                    <p>
                      <small
                        >Trail Length: 0.6 miles (0.96 km) round trip (30
                        mins)</small
                      >
                      <span class="vertical-timeline-element-date"
                        >10:00 AM</span
                      >
                    </p>
                  </div>

                  {/* <!-- Drive to Big Stump Loop Trailhead --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">
                      DRIVE TO BIG STUMP LOOP - 20 MINS
                    </h4>
                    <p>
                        <small
                          >Address:
                          <a
                            href="http://maps.apple.com/?daddr=The+Big+Stump+Grove,+Miramonte,+CA+93641&dirflg=d&t=m"
                            >The Big Stump Grove, Miramonte, CA 93641</a
                          ></small
                        >
                      </p>
                    <span class="vertical-timeline-element-date">10:35 AM</span>
                  </div>

                  {/* <!-- Big Stump Loop Trailhead --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">Big Stump Loop</h4>
                    <img
                      class="img-fluid"
                      src="https://www.americansouthwest.net/california/photographs700/mark-twain-tree.jpg"
                      alt="Big Stump Loop"
                    />
                    <p>
                        Full of big stumps including the remains of the Mark Twain Tree offer the chance to climb on top of one of these monstrous stumps. 
                    </p>

                    <p>
                      <small
                        >Trail Length: 2.8 miles (4.5 km) round trip (1.5 hour)</small
                      >
                      <span class="vertical-timeline-element-date"
                        >10:40 AM</span
                      >
                    </p>
                  </div>

                  {/* <!-- Lunch --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">Lunch</h4>
                    <p>
                      The drive from the park to restaurants are around 1 hour.
                    </p>
                    <p>
                      <a
                        href="http://maps.apple.com/?daddr=41651+Sierra+Dr+Three+Rivers,+CA+93271&dirflg=d&t=m"
                        >Sierra Subs and Salads</a
                      >: 586 reviews & 5 stars
                    </p>
                    <p>
                      <a
                        href="http://maps.apple.com/?daddr=41695+Sierra+Dr+Three+Rivers,+CA+93271&dirflg=d&t=m"
                        >Ol Buckaroo</a
                      >: 514 Reviews & 4 stars
                    </p>
                    <p>
                      <a
                        href="http://maps.apple.com/?daddr=45978+Sierra+Dr+Three+Rivers,+CA+93271&dirflg=d&t=m"
                        >The Gateway Restaurant</a
                      >: 755 reviews & 3 stars
                    </p>

                    <p>
                      [<small>
                        <a
                          href="https://www.yelp.com/search?find_desc=restaurants&find_loc=Sequoia+National+Park%2C+CA"
                          >List of restaurants nearby</a
                        > </small
                      >]
                    </p>
                    <span class="vertical-timeline-element-date">12:10 pm</span>
                  </div>

                  {/* <!-- Drive back to Kings Canyon --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">
                      DRIVE BACK TO NORTH GROVE TRAIL - 1 HOUR
                    </h4>
                    <p>
                        <small
                          >Address:
                          <a
                            href="http://maps.apple.com/?daddr=North+Grove+Trailhead,+Kings+Canyon+National+Park,+CA+93628&dirflg=d&t=m"
                            >North Grove Trailhead, Kings Canyon National Park, CA 93628</a
                          ></small
                        >
                      </p>
                    <span class="vertical-timeline-element-date">1:30 PM</span>
                  </div>

                  {/* <!-- North Grove Loop --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">North Grove Loop</h4>
                    <img
                      class="img-fluid"
                      src="https://www.redwoodhikes.com/SequoiaNP/NorthGrove2.jpg"
                      alt="North Grove Loop Trail"
                    />
                    <p>
                        Clusters of these giants make big impressions as you hike through the North Grove. The mixed forest also includes ponderosa pines, sugar pines, incense cedars, white firs, and dogwood trees that bloom beautifully in the late spring.
                    </p>
                    <p>
                      <small
                        >Trail Length: 1.5 miles (2.4 km) round trip (1 hour and 30 mins)</small
                      >
                      <span class="vertical-timeline-element-date"
                        >2:40 PM</span
                      >
                    </p>
                  </div>

                  {/* <!-- Drive to Sequoia Lake Overlook--> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">
                      DRIVE TO SEQUOIA LAKE OVERLOOK - 24 MINS
                    </h4>
                    <p>
                        <small
                          >Address:
                          <a
                            href="http://maps.apple.com/?daddr=Forest+Road+14S75,+Dunlap,+CA+93621.&dirflg=d&t=m"
                            >Forest Road 14S75, Dunlap, CA 93621.</a
                          ></small
                        >
                      </p>
                    <span class="vertical-timeline-element-date">4:10 PM</span>
                  </div>

                  {/* <!-- Sequoia Lake Overlook --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">Sequoia Lake Overlook</h4>
                    <img
                      class="img-fluid"
                      src="https://www.visitcalifornia.com/sites/visitcalifornia.com/files/VCW_D_SeqKings_T9_Miguel%20Vieira_3841985556_11e2e25fe7_o_1280x642.jpg"
                      alt="Sequoia Lake Overlook"
                    />
                    <p>
                      Peaceful and scenic loop that takes you through a grove of
                      giant sequoias.
                    </p>
                    <p>
                      <small
                        >Address:
                        <a
                          href="http://maps.apple.com/?daddr=Panoramic+Point+Overlook,+Hume,+CA+93628&dirflg=d&t=m"
                          >Panoramic Point Overlook, Hume, CA 93628</a
                        ></small
                      >
                    </p>
                    <p>
                      <small
                        >Trail Length: 2.5 miles (4 km) loop (2 hours)</small
                      >
                      <span class="vertical-timeline-element-date"
                        >2:00 PM</span
                      >
                    </p>
                  </div>

                  {/* <!-- Drive to Panoramic Point Overlook--> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">
                      DRIVE TO PANORAMIC POINT OVERLOOK - 38 MINS
                    </h4>
                    <p>
                        <small
                          >Address:
                          <a
                            href="http://maps.apple.com/?daddr=Panoramic+Point+Overlook,+Hume,+CA+93628&dirflg=d&t=m"
                            >Panoramic Point Overlook, Hume, CA 93628.</a
                          ></small
                        >
                      </p>
                    <span class="vertical-timeline-element-date">4:10 PM</span>
                  </div>

                  {/* <!-- Panoramic Point Overlook --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">Panoramic Point Overlook</h4>
                    <img
                      class="img-fluid"
                      src="https://www.hikespeak.com/img/Sierra/Kings_Canyon/Panoramic/Panoramic_Point_Trail_Kings_Canyon_IMG_9832.jpg"
                      alt="Panoramic Point Overlook"
                    />
                    <p>
                        Panoramic view including miles of Kings Canyon National Park and neighboring national forest lands. Below lies Hume Lake, a small historic lake in Sequoia National Forest that was created in 1908 using a rare multiple-arch dam. The lake water fed a flume that floated timber down to the valley. Beyond, lies the deep glacial gorge of the Kings Canyon itself and a wealth of the High Sierra's peaks.
                    </p>
                    <p>
                      <small
                        >Trail Length: 0.5 miles (0.8 km) round trip (30 mins)</small
                      >
                      <span class="vertical-timeline-element-date"
                        >4:50 PM</span
                      >
                    </p>
                  </div>

                  {/* <!-- Drive back to Visalia --> */}
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">
                      DRIVE TO VISALIA - 1 HOUR & 45 MINS
                    </h4>
                    <span class="vertical-timeline-element-date">5:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}