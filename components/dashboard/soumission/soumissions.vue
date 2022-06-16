<template>
    <div class="container-xl px-4 mt-4">
        <!-- Account page navigation-->
        <nav class="nav nav-borders">
            <a class="nav-link active " data-bs-toggle="tab" href="#validations">Validations</a>
            <a class="nav-link" data-bs-toggle="tab" href="#offres">Offres</a>
            <a class="nav-link" data-bs-toggle="tab" href="#soumissions">Soumissions</a>
            
            <!--a class="nav-link" href=""  target="__blank">Notifications</a-->
        </nav>
        <hr class="mt-0 mb-4">
        <div class="tab-content">
            <!--------validations---------->
            <div id="validations" class="container tab-pane fade show active">
                <div class="grey-bg container-fluid">
                    <section id="minimal-statistics">
                      <div class="row">
                        <div class="col-12 mt-3 mb-1">
                          <h4 class="text-uppercase">Demandes de Validation:</h4>
                          <p>do your work or you'll be fired</p>
                          <div class="row justify-content-end mb-4">
                            <div class="input-group">
                              <div class="form-outline">
                                <input type="search" id="form1" class="form-control" placeholder="Search..."/>
                              </div>
                              <button type="button" class="btn btn-search">
                                <i class="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                
                    <div class="row d-flex justify-content-center">
                      <div class="col-xl-12 col-md-12">
                        <div class="card">
                          <div class="card-content">
                            <div class="card-body cleartfix">
                              <div class="media align-items-stretch">
                                <div class="align-self-center">
                                  <h5 class="mr-4">Company 1</h5>
                                </div>
                                <div class="media-body" >
                                  <p>Request date: 22/05/2022</p>
                                </div>
                                <div class="align-self-center">
                                  <a href="#"><i class="icon-book-open font-medium-2 float-right"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                    <div class="row d-flex justify-content-center">
                      <div class="col-xl-12 col-md-12" >
                        <div class="card">
                          <div class="card-content">
                            <div class="card-body cleartfix">
                              <div class="media align-items-stretch">
                                <div class="align-self-center">
                                  <h5 class="mr-4">Company 2</h5>
                                </div>
                                <div class="media-body">
                                  <p>Request date: 24/05/2022</p>
                                </div>
                                <div class="align-self-center">
                                  <a href="./Validation.html"><i class="icon-book-open font-medium-2 float-right"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  </div>
            </div>
            
            <!--------offres----------->
            <div id="offres" class="container tab-pane fade">
                <div class="grey-bg container-fluid">
                    <section id="minimal-statistics">
                      <div class="row">
                        <div class="col-12 mt-3 mb-1">
                          <h4 class="text-uppercase">Vos Offres:</h4>
                          <div class="input-group">
                            <div class="form-outline">
                              <input type="search" class="form-control" placeholder="Search..."/>
                            </div>
                            <button type="button" class="btn btn-search">
                              <i class="fas fa-search"></i>
                            </button>
                          </div>
                          <div class="align-self-center">
                            <a href="./nouvel-offre.html"><i class="icon-plus font-medium-2 float-right" style="position: relative;"></i></a>
                          </div>    
                        </div>
                      </div>
                
                    <div class="row d-flex justify-content-center">
                      <div class="col-xl-12 col-md-12">
                        <div class="card">
                          <div class="card-content">
                            <div class="card-body cleartfix">
                              <div class="media align-items-stretch">
                                <div class="align-self-center">
                                  <h5 class="mr-4">Offre 1</h5>
                                </div>
                                <div class="media-body" >
                                  <p>Jour J: 22/07/2022</p>
                                </div>
                                <div class="align-self-center">
                                    <a href="./nouvel-offre.html"><i class="icon-pencil font-medium-2 float-right"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                    <div class="row d-flex justify-content-center">
                      <div class="col-xl-12 col-md-12" >
                        <div class="card">
                          <div class="card-content">
                            <div class="card-body cleartfix">
                              <div class="media align-items-stretch">
                                <div class="align-self-center">
                                  <h5 class="mr-4">Offre 2</h5>
                                </div>
                                <div class="media-body">
                                  <p>Jour J: 24/07/2022</p>
                                </div>
                                <div class="align-self-center">
                                    <a href="./nouvel-offre.html"><i class="icon-pencil font-medium-2 float-right"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  </div>
                
            </div>

            <!-----soumissions-->
            <div id="soumissions" class="container tab-pane fade">
              <div class="grey-bg container-fluid">
                <section id="minimal-statistics">
                    <div class="row">
                        <div class="col-12 mt-3 mb-1">
                        <h4 class="text-uppercase">Soumissions:</h4>
                        <div class="input-group">
                          <div class="form-outline">
                            <input type="search" id="form1" class="form-control" placeholder="Search..."/>
                          </div>
                          <button type="button" class="btn btn-search">
                            <i class="fas fa-search"></i>
                          </button>
                        </div>
                        </div>
                    </div>
                    <ul>
                        <li data-toggle="collapse" href="#lot" role="button" aria-expanded="false" aria-controls="lot">
                                <div class="row d-flex justify-content-center">
                                <div class="col-xl-12 col-md-12">
                                    <div class="card mt-2">
                                    <div class="card-content">
                                        <div class="card-body cleartfix">
                                        <div class="media align-items-stretch">
                                            <div class="align-self-center">
                                            <h5 class="mr-4">Offer 1</h5>
                                            </div>
                                            <div class="media-body" >
                                            <p>Jour J: 22/05/2022</p>
                                            </div>
                                            <div class="align-self-center">
                                            <a href="#"><i class="fa-solid fa-angle-down"></i></a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </li>
                        <ul>
                            <li class="collapse" id="lot"  data-toggle="collapse" href="#soumission" role="button" aria-expanded="false" aria-controls="soumission">
                                <div class="row d-flex justify-content-center">
                                <div class="col-xl-12 col-md-12">
                                    <div class="card">
                                    <div class="card-content">
                                        <div class="card-body cleartfix">
                                        <div class="media align-items-stretch">
                                            <div class="align-self-center">
                                            <h5 class="mr-4">Lot 1</h5>
                                            </div>
                                            <div class="media-body" >
                                            
                                            </div>
                                            <div class="align-self-center">
                                            <a href="#"><i class="fa-solid fa-angle-down"></i></a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <ul class="collapse" id="soumission">
                                <li>
                                    <div class="row d-flex justify-content-center">
                                    <div class="col-xl-12 col-md-12">
                                        <div class="card">
                                        <div class="card-content">
                                            <div class="card-body cleartfix">
                                            <div class="media align-items-stretch">
                                                <div class="align-self-center">
                                                <h5 class="mr-4">Company 1</h5>
                                                </div>
                                                <div class="media-body" >
                                                <p>Request date: 12/12/2021</p>
                                                </div>
                                                <div class="align-self-center">
                                                <a href="soumission.html" class="stretched-link"></a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </ul>
                        <li class="caret">
                            <div class="row d-flex justify-content-center">
                            <div class="col-xl-12 col-md-12" >
                                <div class="card">
                                <div class="card-content">
                                    <div class="card-body cleartfix">
                                    <div class="media align-items-stretch">
                                        <div class="align-self-center">
                                        <h5 class="mr-4">Offer 2</h5>
                                        </div>
                                        <div class="media-body">
                                        <p>Jour J: 24/05/2022</p>
                                        </div>
                                        <div class="align-self-center">
                                        <a href=""><i class="fa-solid fa-angle-down"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </li>
                    </ul>
                </section>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'HelloWorld',
      props: {
        msg: String
      }

    }
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.getElementsByTagName("i").classList.toggle("fa-angle-down-fr");
    });
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    margin-top:20px;
    background-color:#f5f7fa !important;
    color:#69707a !important;
  } 
  .card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
  }
  .card .card-header {
    font-weight: 500;
    
    color: white;
  }
  
  .card-header:first-child {
      border-radius: 0.35rem 0.35rem 0 0;
  }
  .card-header {
      padding: 1rem 1.35rem;
      margin-bottom: 0;
      background-color: rgba(33, 40, 50, 0.03);
      border-bottom: 1px solid rgba(33, 40, 50, 0.125);
  }
  .nav-borders .nav-link.active {
      color: #FF4301;
      border-bottom-color: #FF4301;
  }
  .nav-borders .nav-link {
      color: #69707a;
      border-bottom-width: 0.125rem;
      border-bottom-style: solid;
      border-bottom-color: transparent;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 0;
      padding-right: 0;
      margin-left: 1rem;
      margin-right: 1rem;
  }      
  textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {   
  border-color: #FA7D09;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
  outline: 0 none;
}
.btn:focus {
  border-color: #FA7D09;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
  outline: 0 none;
}
.icon-file {
    background-position: center center;
}
.icon-book-open{
    color: #FF4301;
    margin-top: -20px !important;
}
.mr-4{
    margin-top: -17px !important;
}
.media-body{
    margin-top: -7px !important;
}
.card{
    height: 60px !important;
    margin-bottom: 5px !important;
}
.icon-pencil{
    color: #FF4301;
    margin-top: -20px !important;
}
.icon-plus{
    margin-bottom: 2% !important;
    margin-top: -3% !important;
    color: #2F2519;
}
.btn-search{
    background-color:rgb(250, 125, 9) !important;
}
.fa-angle-down{
    color: #FF4301;
}
p{
    margin-left: 2%;
    margin-top: 0.4%;
}
.nested {
    display: none;
  }
  
  .active {
    display: block;
  }
  .fa-angle-down:focus {
    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */
    transform: rotate(90deg);  
  }
  ul{
    list-style-type: none;
    margin-left: 0%;
    padding: 0%;
}
  ul > ul{
    list-style-type: none;
    margin-left: 1.5%;
    padding: 0%;
}

</style>
