# echo "# node.js" 
## README.md
>New repository
- Create Account
    - $ git config --global user.name "YOUR NAME"
    - $ git config --global user.email "YOUR EMAIL ADDRESS"
- Create SSH key
    - $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
- ___Start SSH Agent and add SSH key___
    - $ eval $(ssh-agent -s)
    - $ ssh-add id_rsa
- Init local repos
    - $ git init
    - $ ___git add README.md___
- Commit and push
    - ___$ git commit -m "first commit"___
    - $ git remote add origin git@github.com:KaneGF/node.js.git
    - ___$ git push -u origin master___

>pull
- $ git clone git@github.com:KaneGF/node.js.git
>push
- $ git push