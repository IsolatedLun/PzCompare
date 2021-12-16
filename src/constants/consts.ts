const ROOT_URL: string = 'https://pzwiki.net/';
let BACKEND_URL: string;
const STATS: string[] = ['MaxRange', 'MaxDamage', 'WeaponLength', 'DoorDamage', 
'TreeDamage','Weight', 'MinRange', 'SwingTime', 'BaseSpeed', 'MinDamage', 'MaxHitCount', 
'MinAngle','CriticalChange', 'ConditionMax', 'JamGunChance', 'StopPower', 'ReloadTime', 
'AimingTime','MaxAmmo', 'SoundRadius', 'RecoilDelay', 'ProjectileCount', 'Calories'];
const DEBUG = false;

if(!DEBUG) 
    BACKEND_URL = 'https://pz-compare.herokuapp.com/';
else 
    BACKEND_URL = 'http://localhost:8000/';



export { ROOT_URL, STATS, BACKEND_URL };