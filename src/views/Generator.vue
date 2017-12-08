<template>
    <div id="generator-view">
        <h1>Generer son CV</h1>
        <hr>

        <button class="waves-effect waves-light btn" @click="generatePdf()">Generer en pdf</button>
        <br>
        <div id="workbench">
              <div id="info">
                 {{cv.city}}, {{cv.country}}<br>
                 +33{{cv.phone}}<br> {{cv.email}}
              </div><br>
              <div class="photo">
                  <img :src="cv.photo" width="200px">
              </div>
              <h1>{{cv.firstname}} {{cv.lastname}}<br>{{cv.job}}</h1>
              
              <br><br><br>              
              <div class="section">
                <h2>Experience</h2>
                <div class="content">
                  <span class="date">Start &raquo; End Year</span>
                  <h3>Job Title One</h3>
                  <address>Company Name, Address, City Province</address>
                  <ul>
                    <li>Bullet one Bullet one</li>
                    <li>Bullet two Bullet two</li>
                    <li>Bullet three Bullet three</li>
                    <li>Bullet four Bullet four</li>
                  </ul>
                  
                  <span class="date">Start &raquo; End Year</span>
                  <h3>Job Title Two</h3>
                  <address>Company Name, Address, City Province</address>
                  <ul>
                    <li>Bullet one Bullet one</li>
                    <li>Bullet two Bullet two</li>
                    <li>Bullet three Bullet three</li>
                    <li>Bullet four Bullet four</li>
                  </ul>
                  
                  <span class="date">Start &raquo; End Year</span>
                  <h3>Job Title Three</h3>
                  <address>Company Name, Address, City Province</address>
                </div>
              </div>
              
              <div class="section">
                <h2>Volunteer Experience</h2>
                <div class="content">
                  <span class="date">Start &raquo; End Year</span>
                  <h3>Volunteer Job Title</h3>
                  <address>Company Name, Address, City Province</address>
                  <ul>
                    <li>Bullet one Bullet one</li>
                    <li>Bullet two Bullet two</li>
                    <li>Bullet three Bullet three</li>
                  </ul>
                </div>
              </div>
              
              <div class="section">
                <h2>Formation</h2>
                  <ul>
                    <li>Candidate for Bachelor of Major, University, Province,  StartYear - Present</li>
                    <li>OSSD, Highschool, Town, Province, StartYear-EndYear</li>
                  </ul>
              </div>
              
              <div class="section">
                <h2>Hobbie</h2>
                  <ul>
                    <li>Year, Year, Name of award/Scholarship</li>
                  </ul>
              </div>
          </div>
          <div id="canvas"></div>
    </div>
</template>

<script>
import axios from "axios";
import CvService from "../service/CvService";
import JsPDF from "jspdf"
import html2canvas from "html2canvas"

export default {
  components: {},
  name: "generator-view",
  data() {
    return {
      cv: null,
    };
  },
  created() {
    CvService.fetchOne(this.$route.params.id).then(cv => {
      this.cv = cv;
    });
  },
  methods: {
    generatePdf(){

      html2canvas(document.getElementById('workbench'))
      .then((canvas) => {
        var img=canvas.toDataURL("image/png", 1.0);
        var doc = new JsPDF("mm");
        doc.addImage(img, 'JPEG', -1, 0, 212, 297);
        doc.save("CV-" + this.cv.firstname + "-" + this.cv.lastname + '.pdf');
      })
    }
  }
};
</script>

<style>


#workbench {
  width: 100%;
  min-height: 1000px;
  max-height: 2339px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  box-sizing: border-box;
}

  #info{ 
			float:right;
      padding-top:2.5em;
      text-align: right;
			}

		.date {
			float:left;
			font-size:1em;
			margin:0 0 0 -16em;
			text-align:right;
			}
		abbr, acronym{
			border-bottom:1px dotted #333;
			cursor:help;
			}	
		address{
			font-style:italic;
			color:#333;
			font-size:.9em;
			}
		.content{
			width:32em;
			margin:0 0 0 16em;
			}	
		.section{
			margin: 0;
			padding:1em 0;
			}
	#workbench	ul{
			padding-left:.5em;
			margin-left:.5em;
      }
  .photo{
    float: left;
  }
	#workbench	h1{
      margin-top: 100px;
      text-align: center;
			}
	#workbench	h2 {
			font-size:1.3em;
			font-variant: small-caps;
			letter-spacing: .06em;
      border-bottom:1px solid #000;
      text-align: left;
			}
		.section h3 {
			font-size:1em;
			font-variant: small-caps;
			margin-bottom:0;
      width:14em;
      text-align: left;
			}

</style>
