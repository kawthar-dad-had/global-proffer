<template>
    <div class="container">
        <div class="main-body">
          <div class="jumbotron m-2">
            <a href="#">
              <div class="d-flex" >
                <p>Liste des soumissions</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                  </svg>
              </div>
            </a>
          </div>
        
        
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
    
                </div>
                <div class="col-md-12">
                  <div class="card mb-3">
                    <div class="card-header color-custom-1" >
                      <h1>Soumission</h1>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Soumissioneur:</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          ESI
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Offre</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            Offre 1
                            </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Lot</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            Lot 2
                            </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Date:</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          12/12/2021
                          </div>
                      </div>

                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Classification</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            idk make up sth
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Nombre de Materiels</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            1000
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Nombre de Salaires</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            200
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Numero de CNAS</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            yet another number
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-4">
                          <h6 class="mb-0">Extrait de role + cahier des charges</h6>
                        </div>
                        <div class="col-sm-8 text-secondary">
                            <button type="button" class="btn btn-dl col-3" >Telecharger</button>
                        </div>
                        
                      </div>
                      <!--div class="row">
                        <div class="col-sm-12">
                          <button type="button" class="btn btn-confirm" >Confirmer</button>
    
                        </div>
                      </div-->
                    </div>
                  </div>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    body{
        margin-top:20px;
        text-align: left;
        background-color: #f5f7fa;  
        color:#69707a;  
    }
    .main-body {
        padding: 15px;
    }
    .card {
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
    }
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 0 solid rgba(0,0,0,.125);
        border-radius: .25rem;
    }

    .card-body {
        flex: 1 1 auto;
        min-height: 1px;
        padding: 1rem;
    }

    .gutters-sm {
        margin-right: -8px;
        margin-left: -8px;
    }

    .gutters-sm>.col, .gutters-sm>[class*=col-] {
        padding-right: 8px;
        padding-left: 8px;
    }
    .mb-3, .my-3 {
        margin-bottom: 1rem!important;
    }

    .bg-gray-300 {
        background-color: #e2e8f0;
    }
    .h-100 {
        height: 100%!important;
    }
    .shadow-none {
        box-shadow: none!important;
    }

    .btn-validate {
        float: right !important;
        width:65px;
        height: 30px;
        font-size: 12px;
        background: #FA7D09;
        color: white;

    }


    .btn-reject {
        float: right !important;
        width:67px;
        height: 30px;
        font-size: 12px;
        margin-right: 5px;
        background: #4A3F35;
        color: white;
    

      }

    .btn:focus {
        border-color: #FA7D09;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
        outline: 0 none;
      }

    .btn-dl{
        background: #2F2519;
        color: white;
            /* Chrome 10-25, Safari 5.1-6 */
            background: -webkit-linear-gradient(to right, rgb(74, 63, 53), rgb(47, 37, 25));
    
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: linear-gradient(to right, rgb(74, 63, 53), rgb(47, 37, 25));
            float: right !important;
            width:15%;
            height: 35px;
            font-size: 14px;
            margin-right: 5px;
            color: white;

    }
    .color-custom-1 {
        /* fallback for old browsers */
        background: #FA7D09;
        color: white;
        text-align: center;
    
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
    
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
      }
    .btn-confirm{
        float: right !important;
        width:100px;
        background: #FA7D09;
        color: white;


         /* Chrome 10-25, Safari 5.1-6 */
         background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
         background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
    }
    .d-flex{

        color: #FA7D09 !important;
        margin-left: -6% !important;
      }
      a{
        color: #FA7D09;
      }
      a:hover{
        color:#efa81d;
        text-decoration: none;

      }
      .row{
        margin-top: 6px;
        margin-bottom: 6px;
      }

</style>
