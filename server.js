// Run with: node server.js  ->  http://localhost:3000
// REST API (GET only) + static file server. No packages needed.
const http=require("http"),fs=require("fs"),path=require("path");
const products=JSON.parse(fs.readFileSync(path.join(__dirname,"data","products.json"),"utf8"));
const types={".html":"text/html",".css":"text/css",".js":"text/javascript",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"};
const send=(res,code,data)=>{res.writeHead(code,{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"});res.end(JSON.stringify(data))};
http.createServer((req,res)=>{
  const u=new URL(req.url,"http://localhost");
  if(u.pathname.startsWith("/api/")){
    if(req.method!=="GET")return send(res,405,{error:"Only GET is supported"});
    const parts=u.pathname.split("/").filter(Boolean);           // ["api","products",":slug"]
    if(parts[1]!=="products")return send(res,404,{error:"Not found"});
    if(parts[2]){const p=products.find(x=>x.slug===parts[2]||String(x.id)===parts[2]);return p?send(res,200,p):send(res,404,{error:"Product not found"})}
    let out=products;const c=u.searchParams.get("category"),q=(u.searchParams.get("q")||"").toLowerCase();
    if(c)out=out.filter(p=>p.category.toLowerCase()===c.toLowerCase());          // GET /api/products?category=Coffee
    if(q)out=out.filter(p=>(p.name+p.description).toLowerCase().includes(q));    // GET /api/products?q=latte
    return send(res,200,out);
  }
  let f=path.join(__dirname,u.pathname==="/"?"index.html":decodeURIComponent(u.pathname));
  if(!f.startsWith(__dirname)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){res.writeHead(404);return res.end("Not found")}
  res.writeHead(200,{"Content-Type":types[path.extname(f)]||"application/octet-stream"});fs.createReadStream(f).pipe(res);
}).listen(3000,()=>console.log("SJM Coffee running at http://localhost:3000"));
