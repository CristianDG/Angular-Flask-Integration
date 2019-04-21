import os
import subprocess
import time
from sys import argv
import re as regex

try:
    t = int(argv[1])
except:
    t = 5

CURRENT_DIRECTORY = os.getcwd()
directories = os.listdir(CURRENT_DIRECTORY)
NON_ANGULAR_DIRS = ['static', 'templates', 'venv', 'server', 'Pipfile']

for directory in directories:
    if "." not in directory and directory not in NON_ANGULAR_DIRS:
        ANGULAR_PROJECT_PATH = os.path.join(CURRENT_DIRECTORY, directory)
        DIST_PATH = os.path.join(ANGULAR_PROJECT_PATH, 'dist', directory)

FLASK_STATIC_PATH = os.path.join(CURRENT_DIRECTORY, 'static', '')
FLASK_TEMPLATES_PATH = os.path.join(CURRENT_DIRECTORY, 'templates', '')

dir_exists = True
i = 0
while dir_exists:
    try:
        files = os.listdir(DIST_PATH)
        static_files = ""
        html_files = ""
        for file in files:
            if '.js' in file or '.js.map' in file or '.ico' in file:
                static_files += (file + ' ')
            if '.html' in file:
                html_files += (file + ' ')
        if len(static_files) > 0:
            subprocess.call(('cd ' + DIST_PATH + ' && ' + ' mv ' +
                             static_files + FLASK_STATIC_PATH), shell=True)
            print(f"moved: {static_files} to {FLASK_STATIC_PATH}")
        if len(html_files) > 0:
            text = ""
            DIST_INDEX_LOCATION = os.path.join(DIST_PATH, 'index.html')
            with open(DIST_INDEX_LOCATION, 'r') as f:
                for line in f.readlines():

                    exp = regex.compile(
                        r'([^base]) (src|href)="([^{]*?)"')
                    text += exp.sub(
                        r"""\1 \2="{{url_for('static', filename='\3')}}" """, line)
            with open(DIST_INDEX_LOCATION, 'w') as f:
                f.write(text)
            subprocess.call(('cd ' + DIST_PATH + ' && ' + ' mv ' +
                             html_files + FLASK_TEMPLATES_PATH), shell=True)
            print(f"moved: {html_files} to {FLASK_TEMPLATES_PATH}")

    except Exception as e:
        dir_exists = False
        print(e)
    print(f"-- {i}")
    i += 1
    time.sleep(t)
