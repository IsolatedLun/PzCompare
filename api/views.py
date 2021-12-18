from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.exceptions import Throttled

from .funcs import get_diffs, get_objs

ERR = status.HTTP_400_BAD_REQUEST
OK = status.HTTP_200_OK
CONS = ['Weight', 'SwingTime', 'SoundRadius', 'JamGunChance', 'ReloadTime',
'ReloadTime', 'AimingTime', 'RecoilDelay', 'MinimumSwingTime']

class CompareObjs(APIView):
    def get(self, req, obj_1, obj_2):
        objs = get_objs([obj_1, obj_2])
        showAll = bool(req.GET.get('filter', 'false'))
        
        if isinstance(objs, str):
            return Response({'detail': objs}, ERR)

        if objs[0]['obj'] is not None and objs[1]['obj'] is not None:
            diffs = get_diffs(objs[0], objs[1], '__all__', CONS)
            return Response({0: objs[0], 1: objs[1], 'diffs': diffs}, OK)
        else:
            return Response({'detail': 'Something went wrong'}, ERR)

    def throttled(self, req, wait):
        raise Throttled(wait)

