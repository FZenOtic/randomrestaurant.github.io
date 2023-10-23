let map;
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyCqCkP_wuBTce64zYDHzQGonxOYvWsOLDI", v: "weekly"});
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
 
  map = new Map(document.getElementById("map11"), {
    center: { lat: 16.458569535347692, lng: 102.82736388396506 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map12"), {
    center: { lat: 16.459231595911632, lng: 102.8280000600007 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map13"), {
    center: { lat: 16.460036527292466, lng: 102.82458482520501 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map14"), {
    center: { lat: 16.459541941921394, lng: 102.82461693458241 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map15"), {
    center: { lat: 16.45622694999935, lng: 102.82924059452375 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map16"), {
    center: { lat: 16.478143906346514, lng: 102.82308874054584 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map17"), {
    center: { lat: 16.481381284667325, lng: 102.82020321540284 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map18"), {
    center: { lat: 16.481009968875938, lng: 102.81990371540277 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map19"), {
    center: { lat: 16.481094166578234, lng: 102.81885625418535 },
    zoom: 8,
  });

  map = new Map(document.getElementById("map20"), {
    center: { lat: 16.46988035912891, lng: 102.81751106753484 },
    zoom: 8,
  });
}

initMap();