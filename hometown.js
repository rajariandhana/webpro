const FolderName = "./Hometown_Images/";

const depokImages = ["depok-1.jpeg", "depok-2.jpeg", "depok-3.jpeg"];
// console.log(depok);

const container = document.querySelector(".section1");

function GenerateElements()
{
    for (let i = 0; i < depokImages.length; i++)
    {
        console.log(i)
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("depok_container")

        const img = document.createElement("img");
        img.src = FolderName + depokImages[i];
        img.classList.add("depok_image");
        
        itemContainer.appendChild(img);
        container.appendChild(itemContainer);
    }
}

GenerateElements();