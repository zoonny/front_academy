let datas = [
  {
    month: "Jan",
    target: 94,
    result: 92,
  },
  {
    month: "Feb",
    target: 80,
    result: 60,
  },
  {
    month: "Mar",
    target: 87,
    result: 92,
  },
  {
    month: "Apr",
    target: 98,
    result: 91,
  },
];

const html = [];
datas.forEach(data => {
    html.push("<tr>");
    html.push("<td>");
    html.push(data.month);
    html.push("</td>");
    html.push("<td>");
    html.push(data.target);
    html.push("</td>");
    html.push("<td>");
    html.push(data.result);
    html.push("</td>");
    html.push("<td>");
    html.push(`<svg width="220" height="22">`);
    html.push(`<rect width="${data.target}" height="20" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)"/>`);
    html.push(`<rect width="${data.result}" height="10" y="5" style="fill:rgb(0,255,0)">`);
    html.push(`<animate attributeName="width" from="0" to="${data.result}" dur="0.5s" fill="freeze"/>`);
    html.push(`</rect>`);
    html.push(`</svg>`);
    html.push("</td>");
    html.push("</tr>");
})

document.querySelector("tbody").innerHTML = html.join("");
