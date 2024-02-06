const res = await fetch('settings.json');
const napConfig = await res.json();

export default napConfig;
