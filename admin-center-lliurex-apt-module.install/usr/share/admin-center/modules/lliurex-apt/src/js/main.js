  
    function lliurexApt(){
        var counter=0;
        var arxiu_reps = '/usr/share/lliurex-apt2/reps';        
    
          this.linies = [];
          this.visibleLocals = false;
          this.visibleServidorsAula = false;      
          this.visibleGVA = false;
          this.repositorisLliurexNet = [
            "deb http://lliurex.net/bionic bionic main restricted universe multiverse",
            "deb http://lliurex.net/bionic bionic-updates main restricted universe multiverse",
            "deb http://lliurex.net/bionic bionic-security main restricted universe multiverse"
          ];
          this.repositorisLocals = [
            "deb file:///net/mirror/llx19 bionic main restricted universe multiverse",
            "deb file:///net/mirror/llx19 bionic-updates main restricted universe multiverse",
            "deb file:///net/mirror/llx19 bionic-security main restricted universe multiverse"
          ];
          this.respositoriServidorAula = [
            "deb http://mirror/llx19 bionic main restricted universe multiverse",
            "deb http://mirror/llx19 bionic-updates main restricted universe multiverse",
            "deb http://mirror/llx19 bionic-security main restricted universe multiverse"
          ];
        this.respositorisUbuntu = [
            "deb http://es.archive.ubuntu.com/ubuntu bionic main restricted universe multiverse",
            "deb http://es.archive.ubuntu.com/ubuntu bionic-updates main restricted universe multiverse",
            "deb http://es.archive.ubuntu.com/ubuntu bionic-security main restricted universe multiverse"
          
        ];
        this.respositorisEducatius = [
         "deb http://lliurex.net/recursos-edu xenial main restricted universe multiverse",
        ];
        this.respositorisGVA = [
          "deb http://repositorios.gva.es/dgti/bionic bionic main restricted universe multiverse",
          "deb http://repositorios.gva.es/dgti/bionic bionic-updates main restricted universe multiverse",
          "deb http://repositorios.gva.es/dgti/bionic bionic-security main restricted universe multiverse",
          "deb http://repositorios.gva.es/dgti/bionic-gva bionic main restricted universe multiverse",
          "deb http://repositorios.gva.es/dgti/bionic-gva bionic main restricted universe multiverse",
          "deb http://repositorios.gva.es/dgti/bionic-gva bionic main restricted universe multiverse",
        ];
        this.repositorisPropis = [];
    }
    // I18n
    lliurexApt.prototype._=function _(text){
      //console.log(i18n);
      return ( i18n.gettext("lliurex-apt", text));
    }

    lliurexApt.prototype.getrepositorisLliurexNet=function(){      
      return this.repositorisLliurexNet;
    }
    lliurexApt.prototype.getrepositorisLocals=function(){      
      return this.repositorisLocals;
    }
    lliurexApt.prototype.getrespositoriServidorAula=function(){      
      return this.respositoriServidorAula;
    }
    lliurexApt.prototype.getrespositorisUbuntu=function(){      
      return this.respositorisUbuntu;
    }
    lliurexApt.prototype.getrespositorisEducatius=function(){      
      return this.respositorisEducatius;
    }
    lliurexApt.prototype.getrespositorisGVA=function(){      
      return this.respositorisGVA;
    }    
    lliurexApt.prototype.esborrarLinia=function(index){
      this.linies.splice(index,1);      
      var html =this.creaTaula(this.linies);
      $('#lliurex-apt_mostrador_grafic').html(html);
      this.comprovaBotonsChecked();      
    }
    lliurexApt.prototype.creaTaula=function(_linies){
        var html = "<ul class='list-group' width='100%'>";
            for(var i=0;i<_linies.length;i++){
                  var color_verd = '';
                  var fons_gris = '';
                  if (_linies[i][0]=='#'){ //línia comentada
                      color_verd = " style='color:green'";              
                  }
                  if (_linies[i].trim()==''){ //linia buida
                    //fons_gris = " style='background:lightgrey'";
                    fons_gris = "background:lightgrey;";
                  }                
                  html +="<li class='list-group-item row' style='padding-top:0px;padding-bottom:0px;border: 0.1em solid black;"+fons_gris+"'><div class='col-md-10'"+color_verd+">"+_linies[i]+"</div><div class='col-md-1'><span class='glyphicon glyphicon-remove' style='cursor:pointer' onclick='lliurexapt_LAI.esborrarLinia("+i+")'></span></div></li>";              
                }
            html +="</ul>";
            return html;
    }
    lliurexApt.prototype.Afegir=function(identificador,vector){      
      for(var i=0;i<vector.length;i++){
             lliurexapt_LAI.linies.push(vector[i]);
          }
           var html =lliurexapt_LAI.creaTaula(lliurexapt_LAI.linies);
          $('#lliurex-apt_mostrador_grafic').html(html);
    }
    lliurexApt.prototype.Esborrar=function(identificador,vector){
        for(var j=0;j<vector.length;j++){
            index=lliurexapt_LAI.linies.indexOf(vector[j]);
            if (index!=-1){
              lliurexapt_LAI.linies.splice(index,1);
            }
          }
          var html =lliurexapt_LAI.creaTaula(lliurexapt_LAI.linies);            
          $('#lliurex-apt_mostrador_grafic').html(html);          
    
    }
    lliurexApt.prototype.CancelarClick = function(){
      //window.location = 'http://'+sessionStorage.server+'/admin-center/main.php';
        window.location = 'http://admin-center/main.php';

    }
    lliurexApt.prototype.comprovaBotonsChecked=function(){
           //Repositoris Lliurex     

          if ((lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.repositorisLliurexNet[0])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.repositorisLliurexNet[1])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.repositorisLliurexNet[2])!=-1)){
              $('#lliurex-apt_botonsLliurex input').attr('checked',true).change(); 
              
          }      
          else{
              $("#lliurex-apt_botonsLliurex input").attr('checked',true).change();          
              setTimeout(function(){$("#lliurex-apt_botonsLliurex input").removeAttr('checked');}
              ,50
              );
          }
           //Repositoris locals
           
          if ((lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.repositorisLocals[0])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.repositorisLocals[1])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.repositorisLocals[2])!=-1)){
              $('#lliurex-apt_botonsLocals input').attr('checked',true).change();
          }
          else{          
              $("#lliurex-apt_botonsLocals input").attr('checked',true).change();          
              setTimeout(function(){$("#botonsLocals input").removeAttr('checked');}
              ,50
              );
          }
          
           //Repositoris Aula
          if ((lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositoriServidorAula[0])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositoriServidorAula[1])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositoriServidorAula[2])!=-1)){
              $('#lliurex-apt_botonsAula input').attr('checked',true).change();
          }
          else{          
              $("#lliurex-apt_botonsAula input").attr('checked',true).change();          
              setTimeout(function(){$("#lliurex-apt_botonsAula input").removeAttr('checked');}
              ,50
              );
          }

          if ((lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisEducatius[0])!=-1)){
              $('#lliurex-apt_botonsEducatius input').attr('checked',true).change();
          }
          else{          
              $("#lliurex-apt_botonsEducatius input").attr('checked',false).change();          
              setTimeout(function(){$("#lliurex-apt_botonsEducatius input").removeAttr('checked');}
              ,50
              );
          }    
          
     //Repositoris Ubuntu
          if ((lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisUbuntu[0])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisUbuntu[1])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisUbuntu[2])!=-1)){
              $('#lliurex-apt_botonsUbuntu input').attr('checked',true).change();
          }
          else{      
              $("#lliurex-apt_botonsUbuntu input").attr('checked',true).change();          
              setTimeout(function(){$("#lliurex-apt_botonsUbuntu input").removeAttr('checked');}
              ,50
              );
          }

      //Repositoris GVA
           if ((lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisGVA[0])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisGVA[1])!=-1) || (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisGVA[2])!=-1)|| (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisGVA[3])!=-1)|| (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisGVA[4])!=-1)|| (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.respositorisGVA[5])!=-1)){
              $('#lliurex-apt_botonsGVA input').attr('checked',true).change();
              
          }
          else{          
              $("#lliurex-apt_botonsGVA input").attr('checked',true).change();          
              setTimeout(function(){$("#lliurex-apt_botonsGVA input").removeAttr('checked');}
              ,50
              );
          }  
          var arrayToRemoveChecked =  []; 
          for(var i=0;i<lliurexapt_LAI.repositorisPropis.length;i++){
              $('#lliurex-apt_botonsRepositori_'+i +' input').attr('checked',true).change();          
              var content=$('#lliurex-apt_botonsRepositori_'+i +' input');                    
              if (lliurexapt_LAI.linies.indexOf(lliurexapt_LAI.repositorisPropis[i].repositori)==-1){
                arrayToRemoveChecked.push(content);
              }
          }
        setTimeout(function(){   
          for(var i=0;i<arrayToRemoveChecked.length;i++){
              content = arrayToRemoveChecked[i];
              $(content).removeAttr('checked');
          }
        },50);

    }
    lliurexApt.prototype.comprovaBotonsVisible = function(){
              if (!this.visibleLocals){        
            $('#lliurex-apt_botonsLocal').addClass('hidden');        
          }
          else{
            $('#lliurex-apt_botonsLocal').removeClass('hidden');
          }
          if (!this.visibleServidorsAula){        
            $('#lliurex-apt_botonsAula').addClass('hidden');        
          }
          else{
            $('#lliurex-apt_botonsAula').removeClass('hidden');
          }
          if (!this.visibleGVA){        
            $('#lliurex-apt_botonsGVA').addClass('hidden');        
          }
          else{
            $('#lliurex-apt_botonsGVA').removeClass('hidden');
          }      
    }
    lliurexApt.prototype.gestiona=function(identificador,vector){     
            var nouEstat = $('#lliurex-apt_botons'+identificador+' input').is(':checked');                    
            var AccioAfer = this.Esborrar;
            if (nouEstat) //volem afegir
              AccioAfer=this.Afegir;
            AccioAfer(identificador,vector);
    }
    lliurexApt.prototype.carregaInicialRepositorisPropis=function(){           
        lliurexPare = this;
        var n4dClass="SourcesList";
        var n4dmethod = "mostrarPropis";
        var argList=[];
        var creadentials ="";  
        Utils.n4d(creadentials,n4dClass,n4dmethod,arglist,function(response,status){
              data = response[1];
              
              var __liniesRepos;
              if (typeof(data)!="undefined")
                    __liniesRepos = data.split("\n");
                else __liniesRepos=[];
                    
              //var __liniesRepos = data.split("\n");
              __liniesRepos.pop();
              for(var i=0;i<__liniesRepos.length;i++){
                 __linia = __liniesRepos[i].split("#");              
                 lliurexPare.repositorisPropis.push({nom:__linia[0],repositori:__linia[1]});
              }//hem d'esborar la darrera linia            
              var nouHtml = lliurexPare.creaCheckBoxRepositorisPropis(lliurexPare.repositorisPropis);
              $('#lliurex-apt_repositorisPropis').html(nouHtml); 
              $.material.init();             
        });       
    }
    lliurexApt.prototype.carregaInicial=function(){            
            lliurexPare = this;
            var n4dClass="SourcesList";
            var n4dmethod = "mostrar";
            var argList=[];
            var creadentials ="";  
             
            Utils.n4d(creadentials,n4dClass,n4dmethod,arglist,function(response,status){
              
               if (response[1]){                    
                    data = response[1];
                    var __linies;
                    if (typeof(data)!="undefined")
                        __linies = data.split("\n");
                    else __lines=[];
                    for(var i=0;i<__linies.length;i++){
                        lliurexPare.linies.push(__linies[i]);                        
                    }//hem d'esborar la darrera linia            
                    var nouHtml = lliurexPare.creaTaula(lliurexPare.linies);                    
                    $('#lliurex-apt_mostrador_grafic').html(nouHtml);  
                    lliurexPare.carregaInicialRepositorisPropis();         
                    setTimeout(lliurexPare.comprovaBotonsChecked,100);   
                  }

            //});
            },0);          
              
            n4dClass="LliurexVersion";
            n4dmethod = "lliurex_version";
            Utils.n4d(creadentials,n4dClass,n4dmethod,arglist,function(response,status){
                response=response[1];                
                if (response.indexOf('gva')!=-1){
                  lliurexPare.visibleGVA = true;
                }
                if(response.indexOf('server')!=-1){
                 lliurexPare.visibleLocals = true; 
                }
                if(response.indexOf('client')!=-1){
                  lliurexPare.visibleServidorsAula = true; 
                }
                lliurexPare.comprovaBotonsVisible();            
                setTimeout(lliurexPare.comprovaBotonsChecked,100);                        
            //});
            },0);            
            
    }
    lliurexApt.prototype.gestionaPropis=function(index){       
       this.gestiona("Repositori_"+index,[this.repositorisPropis[index].repositori]);
    }
    lliurexApt.prototype.creaCheckBoxRepositorisPropis=function(_propis){
        var html = " <div class='form-group'>";    
        for(var i=0;i<_propis.length;i++){
          var checked = '';
          if (this.linies.indexOf(_propis[i].repositori)!=-1){
            checked ='checked';
          }
          html +="<div id='lliurex-apt_botonsRepositori_"+i+"' class='checkbox' ><label><input type='checkbox' onClick='lliurexapt_LAI.gestionaPropis("+i+")'><span class='checkbox-material'></span>&nbsp;"+_propis[i].nom+"</input></label></div>";      
        }
        html +="</div>";
        return html;
    }
    lliurexApt.prototype.afegirRepositori=function(){
      var _respositori = $('#lliurex-apt_repositoriManual').val();
         if(_respositori!=''){
             linies.push(_respositori);
             var nouHTML = this.creaTaula(linies);         
             $('#lliurex-apt_mostrador_grafic').html(nouHTML);         
             
             $('#lliurex-apt_repositoriManual').val('');
        }
    }
    lliurexApt.prototype.visible= function(boto){
      if($('#lliurex-apt_botons'+boto).hasClass('hidden'))
         $('#lliurex-apt_botons'+boto).removeClass('hidden');
      else
         $('#lliurex-apt_botons'+boto).addClass('hidden');
    }
    lliurexApt.prototype.mostrarOpcions = function(){
      var html =" <div class='form-group' id = 'lliurex-apt_botonsAmagats'>";
      if (!this.visibleLocals){
                html+="<div id='lliurex-apt_botonsLocalOpcio' class='checkbox' ><label><input type='checkbox' class='styled' onClick='lliurexapt_LAI.visible(&apos;Local&apos;)' ></input>"+this._("lliurex-apt.repositorisLocals")+"</label></div>";            
      }
      if (!this.visibleServidorsAula){
              html += "<div id='lliurex-apt_botonsAulaOpcio' class='checkbox' ><label><input type='checkbox' class='styled' onClick='lliurexapt_LAI.visible(&apos;Aula&apos;)'></input>"+this._("lliurex-apt.repositorisServidorAula")+"</label></div>";
      }        
      html +="</div>";      
      //BootstrapDialog.show({
       var dialog=bootbox.dialog({
                 title: this._("lliurex-apt.habilitarRepositori"),
                 message:html,
                 buttons:[
                   {
                    label:'ok',
                    action: function(dialogItself){                      
                    dialogItself.close();
                            }
                  },
                  ],
                  onshown: function(){ $.material.init('#lliurex-apt_botonsAmagats');
                  }
             });
       dialog.modal("show");
    }  
    lliurexApt.prototype.mostrarAfegirRespositori=function(){
            var html = "<div class='input-group'><span class='input-group-addon' id='basic-addon1'>"+this._("lliurex-apt.nom")+":</span><input id='lliurex-apt_repositoriManualNom' type='text' class='form-control' placeholder='"+this._("lliurex-apt.nom")+"' aria-describedby='basic-addon1'></div>";
            html += "<div class='input-group'><span class='input-group-addon' id='basic-addon2' >"+this._("lliurex-apt.repositori")+":</span><input id='lliurex-apt_repositoriManualRepositori' type='text' class='form-control' placeholder='"+this._("lliurex-apt.repositori")+"' aria-describedby='basic-addon1'></div>";
            var lliurexPare = this;            
            //BootstrapDialog.show({
            var dialog=bootbox.dialog({
                 title:this._("lliurex-apt.afegirRepositori"),
                 message:html,
                 buttons:[
                   {
                    label:'ok',
                    action: function(dialogItself){                      
                            var nom = $('#lliurex-apt_repositoriManualNom').val();
                            var rep  = $('#lliurex-apt_repositoriManualRepositori').val();
                            if ((nom!='') && (rep!=''))
                               {
                                  var n4dClass="SourcesList";
                                  var n4dmethod = "guardarPropis";
                                  var argList=[];
                                  var creadentials =[sessionStorage.username , sessionStorage.password];
                                  var dadesRepositori ='';   
                                  for(var i=0;i<lliurexPare.repositorisPropis.length;i++){
                                    dadesRepositori +=lliurexPare.repositorisPropis[i].nom + "#"+lliurexPare.repositorisPropis[i].repositori+"\n";
                                  }
                                  dadesRepositori += nom + "#"+rep+"\n";                                  
                                  arglist = [dadesRepositori];
                                  Utils.n4d(creadentials,n4dClass,n4dmethod,arglist,function(response,status){                                    
                                    if (!response){
                                      lliurexPare.repositorisPropis.push({nom:nom,repositori:rep});
                                      var nouHtml = lliurexPare.creaCheckBoxRepositorisPropis(lliurexPare.repositorisPropis);
                                      $('#lliurex-apt_repositorisPropis').html(nouHtml);
                                      $.material.init();
                                    }
                                    else 
                                      alert(response);
                                  });
                                  dialogItself.close();
                                  
                               }                               
                          }
                  },
                  {
                    label:lliurexPare._("lliurex-apt.cancelar"),
                    action: function(dialogItself){
                    
                      dialogItself.close();
                    }
                  }
                 
                  ]
             });
            dialog.modal("show");
    }
    lliurexApt.prototype.mostrarResultatUpdate=function(){
        if ($('#lliurex-apt_mostrarResultatUpdate').hasClass('hidden')){
          $('#lliurex-apt_mostrarResultatUpdate').removeClass('hidden');
          $('#lliurex-apt_canviarHiddenResultat').removeClass('glyphicon-plus');
          $('#lliurex-apt_canviarHiddenResultat').addClass('glyphicon-minus');
        }
        else{
          $('#lliurex-apt_mostrarResultatUpdate').addClass('hidden');
          $('#lliurex-apt_canviarHiddenResultat').removeClass('glyphicon-minus');
          $('#lliurex-apt_canviarHiddenResultat').addClass('glyphicon-plus');    
        }
    }
    lliurexApt.prototype.AcceptarCanvis = function(){
      n4dClass="SourcesList";
      n4dmethod = "execAptUpdate";
      var creadentials =[sessionStorage.username , sessionStorage.password];
      arglist = [this.linies.join("\n")];
      //arglist = [this.linies];
      //var dialegTancar;
      pare =this;
      //BootstrapDialog.show({
      var dlg=bootbox.dialog({
              title:'<div class="bg-primary">'+pare._("lliurex-apt.actualitzantFontsPaquets")+'</div>',
              message:'<div class="bg-info">'+pare._("lliurex-apt.espereuUnMoment")+'</div>'
              //onshow:function (dialogP){ dialegTancar = dialogP}
      });
      dlg.modal("show");
      Utils.n4d(creadentials,n4dClass,n4dmethod,arglist,function(response,status){
        //dialegTancar.close();
        dlg.modal("toggle");
            var html = pare._("lliurex-apt.mostrarEixida")+":<span style='cursor:pointer' class='glyphicon glyphicon-plus' id='lliurex-apt_canviarHiddenResultat' onclick='lliurexapt_LAI.mostrarResultatUpdate()'></span><div id='lliurex-apt_mostrarResultatUpdate' class='hidden'>"+response.join("<br/>")+"</div>";
            
            // BootstrapDialog.show({
            var dialog=bootbox.dialog({
                 title:pare._("lliurex-apt.finalitzat"),
                 message:html,
                 buttons:[{
                  label:'ok',
                  action:function(dialogP) {dialogP.close();}
                 } ]             
            });
            dialog.modal("show");
            
      },0);
    }
    
    lliurexApt.prototype.init=function(){
      this.carregaInicial();
      //falta este placeholder 
     
      $('#lliurex-apt_repositoriManual').attr('placeholder',this._("lliurex-apt.afegirRepositori"));
    }
  
  var lliurexapt_LAI; //lliurexAptInstance
  $(document).ready(function(){
    lliurexapt_LAI = new lliurexApt();
    lliurexapt_LAI.init();
    $.material.init();        
  });
