from bs4 import BeautifulSoup


def parse_file(path: str):
    """
    Reads the script files and passes it to parse_data().
    """

    res = []

    with open(path, 'r') as f:
        text = f.read().split('item ')
        for x in text:
            data = parse_data(x);
            if data.get('DisplayName'):
                res.append({'obj': data})
                
    return res


def create_dict(s: str):
    """
    Creates a valid dictionary from the string dictionary returned from parse_data().
    """

    parsed = s.split(',')

    stats = {}
    for x in parsed:
        try:
            x = x.split(':')
            stats[x[0]] = x[1]
        except:
            pass

    return stats


def parse_data(s: str):
    """
    Converts the constructor of the object into a semi valid dictionary.
    """

    if s is None: return None

    parsed = s.replace(' ', '').replace('=', ':').replace('\n', '').replace('\t', '')
    
    for idx, char in enumerate(parsed):
        if char == '{':
            parsed = parsed[idx+1::]
            break;

    return create_dict(parsed)


def get_objs(objs: list):
    """
     Retrieves the objects from the db.
    """
    from . import models

    res = []

    try:
        for obj in objs:
           res.append(models.Obj.objects.get(name=obj).data)
    except:
        return f"Object '{obj}' doesn\' exist."
    return res

# Gets the image urls of the obj for the frontend.
def get_urls(soup: BeautifulSoup):
    """
    Tries to extract the image urls of an object.
    """

    tables = soup.find_all('table', {'class': 'infobox'}, limit=1)
    
    for table in tables:
        if len(table) > 0:
            tbody = table.findChild('tbody')
            main_img = tbody.find_next('tr').find_next('tr').findChild('a')['href']
            icon = tbody.find_next('tr').find_next('tr').find_next('tr').findChild('img')['src']
            
            return {'main': main_img, 'icon': icon}

    return None

#===========================
def calc_diff(x, y):
    """
    Calculates the percentage difference between 2 values.
    """

    x, y = float(x), float(y)
    return round((abs(x - y) / ((x + y) / 2)) * 100, 1)


def compare_diff(x: dict, y: dict, cons: list):
    """
    Compares the 'val' key in 2 dictionaries and returns the higher dictionary.
    [{'name': 'Axe', 'stat': 'MaxDamage','val': 2}, 
    {'name': 'Wrench', 'stat': 'MaxDamage', 'val': 1}]
    """

    try:
        val_x, val_y = abs(float(x['val'])), abs(float(y['val']))
    except:
        return None
        
    pct = 0

    if (val_x + val_y) == 0:
        return None
    
    pct = calc_diff(val_x, val_y)

    if pct < 0.1:
        return None

    if val_x > val_y:
        return {'stat': x['stat'], 'name': x['name'],'pct': pct, 'con': True if x['stat'] in cons else False}
    return {'stat': y['stat'], 'name': y['name'],'pct': pct, 'con': True if y['stat'] in cons else False}


def get_diffs(a, b, stats, cons: list):
    """
    For loop version of get_diff().
    """

    diff_a, diff_b = {}, {}

    if stats == '__all__':
        stats = a['obj'] if len(a['obj']) > len(a['obj']) else b['obj']

    for var in stats:
        if a['obj'].get(var, 0) and b['obj'].get(var, 0):

            stat = compare_diff(
            {'name': a['obj']['DisplayName'], 'stat': var, 'val': a['obj'][var]},
            {'name': b['obj']['DisplayName'], 'stat': var, 'val': b['obj'][var]},
            cons)

            if stat: # separates the diffs.
                if stat['name'] == a['obj']['DisplayName']:
                   diff_a[stat['stat']] = -stat['pct'] if stat['con'] else stat['pct']
                else:
                    diff_b[stat['stat']] = -stat['pct'] if stat['con'] else stat['pct']

    return {'0': diff_a, '1': diff_b}

# Utils
def is_num(x: str, typeof=float):
    try:
        typeof(x)
        return True
    except:
        return False

# Updates all of the objects in the db.
def update_objs(path: str):
    import os
    from . import models
    import json

    module_dir = os.path.dirname(__file__)
    file_path = os.path.join(module_dir, path)

    with open(file_path, 'r') as f:
        text = json.loads(f.read())
        for x in text:
            models.Obj.objects.update_or_create(name=x['obj']['DisplayName'], defaults={
                'data': x
            })