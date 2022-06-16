<template>

    <div class="container-xl px-4 mt-4">
        <!-- Account page navigation-->
        <nav class="nav nav-borders">
            <a class="navlink nav-link active " data-bs-toggle="tab" href="#offres">Home</a>
            <a class="tab " >
                <a class=" nav-link tab-toggle " data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false" role="button" id="navbarDropdownMenuLink">Profile</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <ul class="nav " role="tablist">
                        <li><a class="navlink nav-link" data-bs-toggle="tab" href="#profile">Profile</a></li>
                        <li><a class="navlink nav-link" data-bs-toggle="tab" href="#soumissions">Soumissions</a></li>
                        <li><a class="navlink nav-link" data-bs-toggle="tab" href="#security">Securité</a></li>
                    </ul>
                </div>
            </a>
            <a class="navlink nav-link" data-bs-toggle="tab" href="#contact">Contact</a>
            <!--a class="nav-link" href=""  target="__blank">NotifHoications</a-->
        </nav>
        <hr class="mt-0 mb-4">
                        <div id="profile" class="container tab-pane fade ">
                    <div class="row">
                        <div class="col-xl-4">
                            <!-- Profile details card-->
                            <div class="card mb-4 mb-xl-0">
                                <div class="card-header color-custom-1">Informations générales</div>
                                <div class="card-body text-center">
                                    <form id="Pinfo">
                                        <div class="mb-3">
                                            <label class="small mb-1" style="margin-right: 100% !important;" for="inputUsername">Nom</label>
                                            <input class="form-control" id="inputUsername" type="text" placeholder="Entrez votre nom" value="Meddah" disabled="disabled">
                                        </div>
                                        <div class="mb-3">
                                            <label class="small mb-1" style="margin-right: 100% !important;" for="inputFirstName">Prénom</label>
                                            <input class="form-control" id="inputFirstName" type="text" placeholder="Entrez votre prenom" value="Hafsa" disabled="disabled">
                                        </div>
                                        <div class="mb-3">
                                            <label class="small mb-1" style="margin-right: 100% !important;" for="inputEmail">Email</label>
                                            <input class="form-control" id="inputEmail" type="email" placeholder="Entrez votre adresse Email" value="h.meddah@esi-sba.dz" disabled="disabled">
                                        </div>
                                        <div class="mb-3">
                                            <label class="small mb-1" style="margin-right: 100% !important;" for="inputAdresse">Adresse</label>
                                            <input class="form-control" id="inputAdresse" type="text" placeholder="Entrez votre adresse" value="Campus cite 5 (hell) - Sidi Bel Abbès" disabled="disabled">
                                        </div> 
                                        <div class="mb-3">
                                            <label class=" col-md-6 mb-1" style="margin-right: 100% !important;" for="inputNum">N° de Téléphone</label>
                                            <input class="form-control" id="inputNum" type="tel" placeholder="Entrez votre Numero de Telephone" value="555-123-4567" disabled="disabled">
                                        </div>
                                    </form>
                                    <button class="btn color-custom-1" id="btn1" type="button" onclick="enable_disable()">Modifier</button>  
                                    <button class="btn d-none" id="btnUndo" type="button" style="color:gray !important; border-color: darkgrey;" onclick="enable_disable()">Annuler</button> 
                                    <button class="btn d-none color-custom-1 " id="btnSave" type="button">Enregistrer</button>  
                                </div>          
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <!-- entreprise details card-->
                            <div class="card mb-4">
                                <div class="card-header color-custom-2">Informations d’entreprise</div>
                                <div class="card-body">
                                    <form>
                                        <!-- Form Row-->
                                        <div class="row gx-3 mb-3">
                                            <!-- Form Group (name)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputName">Nom</label>
                                                <input class="form-control" id="inputName" type="text" placeholder="Entez le nom de votre entreprise" value="ESi" disabled="disabled">
                                                
                                            </div>
                                            <!-- Form Group (type)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputType">Type</label>
                                                <input class="form-control" id="inputType" type="text" placeholder="Entez le type d'entreprise" value="Emotional torture" disabled="disabled">
                                            </div>
                                        </div>
                                        <!-- Form Row        -->
                                        <div class="row gx-3 mb-3">
                                            <!-- Form Group (registre)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputOrgName">N° de registre</label>
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" id="inputOrgName" placeholder="Entrez votre N° de registre" aria-label="Entrez votre N° de registre" aria-describedby="basic-addon2" value="700000023" disabled="disabled">
                                                    <div class="input-group-append">
                                                    <button class="btn color-custom-2 btn-sm" style="height:48px; width:48px" type="button"  data-bs-toggle="modal" data-bs-target="#registreModal"><img src="view.png" style="height:23px; width:22px; position:center"/></button>
    
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form Group (qualification)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputQualification">Qualification</label>
                                                <div class="input-group mb-3">
                                                    <input  class="form-control" id="inputQualification" type="text" placeholder="Entez votre Qualification" value="idk make up sth" aria-label="Entez votre Qualification" aria-describedby="basic-addon2" disabled="disabled">
                                                    <div class="input-group-append">
                                                    <button class="btn color-custom-2 btn-sm" style="height:48px; width:48px" type="button" data-bs-toggle="modal" data-bs-target="#qualificationModal"><img src="view.png" style="height:23px; width:22px; position:center"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Form Group (codes)-->
                                        <div class="mb-3">
                                            <label class="small mb-1" for="inputCodes">Codes</label>
                                            <input class="form-control" id="inputCodes" type="text" placeholder="Entez vos codes" value="Code1, Code2, Code3 ..." disabled="disabled">
                                        </div>
                                        <!-- Form Row-->
                                        <div class="row gx-3 mb-3">
                                            <!-- Form Group (nif)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputNIF">NIF</label>
                                                <div class="input-group mb-3">
                                                    <input  class="form-control" id="inputNIF" type="text" placeholder="Entez votre numero d'identification Fiscal" value="idk sum number" aria-label="Entez votre numero d'identification Fiscal" aria-describedby="basic-addon2" disabled="disabled">
                                                    <div class="input-group-append">
                                                    <button class="btn color-custom-2 btn-sm" style="height:48px; width:48px" type="button" data-bs-toggle="modal" data-bs-target="#nifModal"><img src="view.png" style="height:23px; width:22px; position:center"/></button>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                            <!-- Form Group (nis))-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputNIS">NIS</label>
                                                
                                                <div class="input-group mb-3">
                                                    <input  class="form-control" id="inputNIS" type="text" placeholder="Entez votre numero d'identification statique" value="idk sum other numberr" aria-label="Entez votre numero d'identification Statique" aria-describedby="basic-addon2" disabled="disabled">
                                                    <div class="input-group-append">
                                                    <button class="btn color-custom-2 btn-sm" style="height:48px; width:48px" type="button" data-bs-toggle="modal" data-bs-target="#nisModal"><img src="view.png" style="height:23px; width:22px; position:center"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Form Row-->
                                        <div class="row gx-3 mb-3">
                                            <!-- Form Group (casnos)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputCASNOS">CASNOS</label>
                                                <div class="input-group mb-3">
                                                    <input  class="form-control" id="inputCASNOS" type="text" placeholder="Entez votre numero de CASNOS" value="yet another number" aria-label="Entez votre numero de CASNOS" aria-describedby="basic-addon2" disabled="disabled">  
                                                    <div class="input-group-append">
                                                    <button class="btn color-custom-2 btn-sm" style="height:48px; width:48px" type="button" data-bs-toggle="modal" data-bs-target="#casnosModal"><img src="view.png" style="height:23px; width:22px; position:center"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form Group (cacopath)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputCACOPATH">CACOPATH</label>
                                                <div class="input-group mb-3">
                                                    <input class="form-control" id="inputCACOPATH" type="text" placeholder="Entez votre numero de CACOPATH" value="you guessed it, Yet another number" aria-label="Entez votre numero de CACOPATH" aria-describedby="basic-addon2" disabled="disabled">
                                                    <div class="input-group-append">
                                                    <button class="btn color-custom-2 btn-sm" style="height:48px; width:48px" type="button" data-bs-toggle="modal" data-bs-target="#cacopathModal"><img src="view.png" style="height:23px; width:22px; position:center"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- edit btn-->
                                        <button class="btn color-custom-2" type="button"  >Modifier</button>
                                    </form>
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
body{margin-top:20px;
    background-color:#f5f7fa;
    color:#69707a;
    }
    .img-account-profile {
        height: 10rem;
    }
    .rounded-circle {
        border-radius: 50% !important;
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
    .form-control, .dataTable-input {
        display: block;
        width: 100%;
        padding: 0.875rem 1.125rem;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1;
        color: #69707a;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #c5ccd6;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0.35rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
        .btn{
            background-color: #FA7D09;
            color: white;
        }
        .cardoffre{
            margin-top: 50px;
            box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
            border-radius: 0.35rem;
            
        }
        .cardoffre a{
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .nav-borders .navlink.active {
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
    }    .color-custom-1 {
        /* fallback for old browsers */
        background: #FA7D09;
        color: white;
      
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
      
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
      }

      .color-custom-2 {
        /* fallback for old browsers */
        background: #2F2519;
        color: white;
      
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to right, rgba(255, 67, 1, 0.5), rgb(47, 37, 25));
      
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to right, rgb(74, 63, 53), rgb(47, 37, 25));
        
      }
      .color-custom-2:focus {   
        border-color: #2F2519;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
        outline: 0 none;
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
    

</style>
