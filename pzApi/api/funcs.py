from bs4 import BeautifulSoup


def set_doubles(dict: dict, *pair: list):
    """
    Combines 2 key/value pairs into 1 pair.
    """

    for x in pair:
        try:
            dict[f'{x[0]}/{x[1]}'] = f'{dict[x[0]]}/{dict[x[1]]}'
            dict.pop(x[0]) ; dict.pop(x[1])
        except KeyError as e:
            return None

    return dict


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
    
    if parsed[0] == '{':
        parsed = parsed[1::]

    return create_dict(parsed)


def get_info(html: str, obj_len: int):
    """
    Gets the data of an object.
    """

    from bs4 import BeautifulSoup

    soup = BeautifulSoup(html, 'html.parser')
    stats = soup.find('pre')
    urls = get_urls(soup)

    if stats is not None:
        return stats.get_text(strip=True)[5+obj_len:], urls
    return None, None


def get_urls(soup: BeautifulSoup):
    """
    Tries to extract the image urls of an object.
    """

    tables = soup.find_all('table', {'class': 'infobox'}, limit=1)
    
    try:
        for table in tables:
            if len(table) > 0:
                tbody = table.findChild('tbody')
                main_img = tbody.find_next('tr').find_next('tr').findChild('a')['href']
                icon = tbody.find_next('tr').find_next('tr').find_next('tr').findChild('img')['src']
                
                return {'main': main_img, 'icon': icon}
    except:
        return None


def get_obj(obj_name: str):
    """
    Wrapper function to get an object.
    """

    import requests

    URL = 'https://pzwiki.net/wiki/'
    try:
        req = requests.get(URL + obj_name)

        if(req.status_code == 200):
            obj_info, urls = get_info(req.text, len(obj_name))
            return {'obj': parse_data(obj_info), 'images':  urls}, None
        elif(req.status_code > 404):
            raise ConnectionError
        raise Exception

    except ConnectionError:
        return None, 'Connection error ' + f'[{req.status_code}]'
    except Exception:
        return None, f"Object '{obj_name}' does not exist."


def get_objs(obj_names: list):
    """
    For loop compatible version of get_obj.
    """

    res = []

    for name in obj_names:
        obj, err = get_obj(name)
        if err is None:
            res.append(obj)
        else:
            return err
    return res


def calc_diff(x, y):
    """
    Calculates the percentage difference between 2 values.
    """

    x, y = float(x), float(y)
    return round((abs(x - y) / ((x + y) / 2)) * 100, 1)


def compare_diff(x: dict, y: dict):
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
        return {'stat': x['stat'], 'name': x['name'],'pct': pct}
    return {'stat': y['stat'], 'name': y['name'],'pct': pct}


def get_diffs(a, b, stats):
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
            {'name': b['obj']['DisplayName'], 'stat': var, 'val': b['obj'][var]})

            if stat: # separates the diffs.
                if stat['name'] == a['obj']['DisplayName']:
                   diff_a[stat['stat']] = stat['pct'] 
                else:
                    diff_b[stat['stat']] = stat['pct']

    return {'0': diff_a, '1': diff_b}


def is_num(x: str, typeof=float):
    try:
        typeof(x)
        return True
    except:
        return False