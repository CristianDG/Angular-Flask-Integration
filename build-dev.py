import os
import subprocess


CURRENT_DIRECTORY = os.getcwd()
directories = os.listdir(CURRENT_DIRECTORY)
NON_ANGULAR_DIRS = ['static', 'templates', 'venv', 'server', 'Pipfile']

for directory in directories:
    if "." not in directory and directory not in NON_ANGULAR_DIRS:
        ANGULAR_PROJECT_PATH = os.path.join(CURRENT_DIRECTORY, directory)

subprocess.call(('cd', ANGULAR_PROJECT_PATH,
                 '&&', 'ng', 'build', '--watch', '--base-href', 'static/', '&'), shell=True)
