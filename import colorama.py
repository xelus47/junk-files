import colorama
from colorama import Fore, Back, Style
colorama.init()

MINY, MAXY = 1, 24
MINX, MAXX = 1, 80

pos = lambda y, x: '\x1b[%d;%dH' % (y, x)