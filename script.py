import os

def search_files(directory, search_term):
    matching_files = []
    print(f"Searching in directory: {directory}")
    for root, dirs, files in os.walk(directory):
        # Exclure le dossier node_modules
        dirs[:] = [d for d in dirs if d != 'node_modules']
        for file in files:
            if file.endswith(".js") or file.endswith(".jsx") or file.endswith(".ts") or file.endswith(".tsx"):
                file_path = os.path.join(root, file)
                print(f"Checking file: {file_path}")
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if search_term in content:
                            print(f"Found '{search_term}' in: {file_path}")
                            matching_files.append(file_path)
                except Exception as e:
                    print(f"Could not read file {file_path}: {e}")
    
    if matching_files:
        print("\nFiles containing the term '{}':".format(search_term))
        for file in matching_files:
            print(file)
    else:
        print("\nNo files containing the term '{}' were found.".format(search_term))

if __name__ == "__main__":
    directory_to_search = "C:/xampp/htdocs/501/501_mobile/501_mobile"
    search_term = "NavigationContainer"
    search_files(directory_to_search, search_term)