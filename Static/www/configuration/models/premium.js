window.carouselAppModel = {
    selectionSlide: {
        config: {
            id: "selection-slide",
            layout: "selection-slide",
            keyword: "Help me choose",
            theme: "light"
        },
        content: {
            title: "Find your perfect Surface",
            subtitle: "See which Surface is right for you",
            sections: [
                {
                    id: "help-me-choose",
                    text: "Help me choose",
                    icon: "./assets/help_me_choose_section_icon.png",
                    image: "./assets/help_me_choose_section.jpg",
                    innerSlides: [
                        {
                            id: "gateway",
                            type: "question",
                            title: "How will you be using your Surface most of the time?",
                            chooseLimit: "(Check all that apply)",
                            multipleChoice: true,
                            options: [
                                {
                                    id: "home",
                                    text: "At home",
                                    icon: "./assets/help_me_choose/home_icon.png",
                                    image: "./assets/help_me_choose/home_image.jpg"
                                },
                                {
                                    id: "school",
                                    text: "For school",
                                    icon: "./assets/help_me_choose/school_icon.png",
                                    image: "./assets/help_me_choose/school_image.jpg"
                                },
                                {
                                    id: "work",
                                    text: "For work",
                                    icon: "./assets/help_me_choose/work_icon.png",
                                    image: "./assets/help_me_choose/work_image.jpg"
                                },
                                {
                                    id: "connected",
                                    text: "Connected to a network",
                                    description: "(corporate, school, or government)",
                                    icon: "./assets/help_me_choose/connected_icon.png",
                                    image: "./assets/help_me_choose/connected_image.jpg"
                                }
                            ]
                        },
                        {
                            id: "use",
                            type: "question",
                            title: "Tell us what you'll be doing on your Surface?",
                            chooseLimit: "(Check all that apply)",
                            multipleChoice: true,
                            background: {
                                placeholder: "./assets/help_me_choose/use_default_image-desktop.jpg",
                                desktop: "./assets/help_me_choose/use_default_image-desktop.jpg",
                                mobile: "./assets/help_me_choose/use_default_image-mobile.jpg",
                                mobilePlaceholder: "./assets/help_me_choose/use_default_image-mobile-placeholder.jpg"
                            },
                            options: [
                                {
                                    id: "personal",
                                    text: "Personal",
                                    detail: "(web browsing, email, shopping, social media, streaming music and shows)",
                                    icon: "./assets/help_me_choose/personal_icon.png"
                                },
                                {
                                    id: "productivity",
                                    text: "Productivity",
                                    detail: "(Microsoft 365, reports, presentations, homework)",
                                    icon: "./assets/help_me_choose/productivity_icon.png"
                                },
                                {
                                    id: "multi-tasking",
                                    text: "Multi-tasking",
                                    detail: "(multiple apps or browser tabs open at once)",
                                    icon: "./assets/help_me_choose/multitasking_icon.png"
                                },
                                {
                                    id: "professional-software",
                                    text: "Professional Software",
                                    detail: "(architectural or graphic design, music production)",
                                    icon: "./assets/help_me_choose/professional_icon.png"
                                },
                                {
                                    id: "intense-graphic-or-video",
                                    text: "Intense graphic or video workloads",
                                    detail: "(programs like Adobe Premiere Pro, Drawboard, AutoDesk AutoCAD, or SolidWorks)",
                                    icon: "./assets/help_me_choose/graphics_icon.png"
                                }
                            ]
                        },
                        {
                            id: "type",
                            type: "question",
                            title: "What type of computer are you looking for?",
                            chooseLimit: "(Check all that apply)",
                            multipleChoice: true,
                            background: {
                                placeholder: "./assets/help_me_choose/type_default_image-desktop.jpg",
                                desktop: "./assets/help_me_choose/type_default_image-desktop.jpg",
                                mobile: "./assets/help_me_choose/type_default_image-mobile.jpg",
                                mobilePlaceholder: "./assets/help_me_choose/type_default_image-mobile-placeholder.jpg"
                            },
                            options: [
                                {
                                    id: "laptop",
                                    text: "Laptop",
                                    detail: "(traditional design with attached keyboard)",
                                    icon: "./assets/help_me_choose/laptop_icon.png"
                                },
                                {
                                    id: "2-in-1",
                                    text: "2-in-1",
                                    detail: "(laptop with removable keyboard)",
                                    icon: "./assets/help_me_choose/2in1_icon.png"
                                },
                                {
                                    id: "desktop",
                                    text: "Desktop",
                                    detail: "(full-size workstation)",
                                    icon: "./assets/help_me_choose/desktop_icon.png"
                                }
                            ]
                        },
                        {
                            id: "move",
                            type: "question",
                            title: "How often do you need to unplug and take your Surface with you?",
                            chooseLimit: "(Choose one)",
                            hasSlider: true,
                            background: {
                                placeholder: "./assets/help_me_choose/move_default_image-desktop.jpg",
                                desktop: "./assets/help_me_choose/move_default_image-desktop.jpg",
                                mobile: "./assets/help_me_choose/move_default_image-mobile.jpg",
                                mobilePlaceholder: "./assets/help_me_choose/move_default_image-mobile-placeholder.jpg"
                            },
                            options: [
                                {
                                    id: "never",
                                    text: "Never",
                                    icon: "./assets/help_me_choose/move_icon.png"
                                },
                                {
                                    id: "once-in-a-while",
                                    text: "Once in a while",
                                    icon: "./assets/help_me_choose/move_icon.png"
                                },
                                {
                                    id: "a-few-days-a-week",
                                    text: "A few days a week",
                                    icon: "./assets/help_me_choose/move_icon.png"
                                },
                                {
                                    id: "every-day",
                                    text: "Every day",
                                    icon: "./assets/help_me_choose/move_icon.png"
                                }
                            ]
                        },
                        {
                            id: "size",
                            type: "question",
                            title: "What screen size do you prefer?",
                            chooseLimit: "(Choose one)",
                            hasSlider: true,
                            background: {
                                placeholder: "./assets/help_me_choose/size_default_image-desktop.jpg",
                                desktop: "./assets/help_me_choose/size_default_image-desktop.jpg",
                                mobile: "./assets/help_me_choose/size_default_image-mobile.jpg",
                                mobilePlaceholder: "./assets/help_me_choose/size_default_image-mobile-placeholder.jpg",
                            },
                            options: [
                                {
                                    id: "compact",
                                    text: "Compact",
                                    detail: '(about 10")',
                                    image: "./assets/help_me_choose/size_tablet_icon.png",
                                    imageInitialScale: {
                                        x: 0.55,
                                        y: 0.65
                                    }
                                },
                                {
                                    id: "small",
                                    text: "Small",
                                    detail: '(between 10 – 13")',
                                    image: "./assets/help_me_choose/size_tablet_icon.png",
                                    imageInitialScale: {
                                        x: 0.75,
                                        y: 0.75
                                    }
                                },
                                {
                                    id: "medium",
                                    text: "Medium",
                                    detail: '(between 13 – 15")',
                                    image: "./assets/help_me_choose/size_laptop_icon.png",
                                    imageInitialScale: {
                                        x: 0.9,
                                        y: 0.9
                                    }
                                },
                                {
                                    id: "large",
                                    text: "Large",
                                    detail: '(15" or greater)',
                                    image: "./assets/help_me_choose/size_laptop_icon.png",
                                    imageInitialScale: {
                                        x: 1,
                                        y: 1
                                    }
                                }
                            ]
                        },
                        {
                            id: "storage",
                            type: "question",
                            title: "What do you store on your computer?",
                            chooseLimit: "(Choose one)",
                            background: {
                                placeholder: "./assets/help_me_choose/storage_default_image-desktop.jpg",
                                desktop: "./assets/help_me_choose/storage_default_image-desktop.jpg",
                                mobile: "./assets/help_me_choose/storage_default_image-mobile.jpg",
                                mobilePlaceholder: "./assets/help_me_choose/storage_default_image-mobile-placeholder.jpg"
                            },
                            options: [
                                {
                                    id: "a-few-things",
                                    text: "Some stuff, But I mostly store files in the cloud",
                                    detail: "(OneDrive,DropBox, etc…)",
                                    icon: "./assets/help_me_choose/some_things_icon.png"
                                },
                                {
                                    id: "everything",
                                    text: "Everything",
                                    detail: "(photos, videos, files, apps)",
                                    icon: "./assets/help_me_choose/everything_icon.png"
                                }
                            ]
                        },
                        {
                            id: "features",
                            type: "question",
                            title: "Are any of these features important to you?",
                            subTitle: "Every Surface includes built-in enterprise grade security with Windows Defender.",
                            chooseLimit: "(Choose all that apply)",
                            multipleChoice: true,
                            background: {
                                placeholder: "./assets/help_me_choose/features_default_image-desktop.jpg",
                                desktop: "./assets/help_me_choose/features_default_image-desktop.jpg",
                                mobile: "./assets/help_me_choose/features_default_image-mobile.jpg",
                                mobilePlaceholder: "./assets/help_me_choose/features_default_image-mobile-placeholder.jpg"
                            },
                            options: [
                                {
                                    id: "lte-connectivity",
                                    text: "LTE connectivity",
                                    detail: "(for areas with slow, no, or unsecured WiFi - requires mobile dataplan)",
                                    icon: "./assets/help_me_choose/lte_icon.png"
                                },
                                {
                                    id: "computer-color-options",
                                    text: "Available in a choice of colors and finishes",
                                    icon: "./assets/help_me_choose/color_icon.png"
                                },
                                {
                                    id: "onscreen-writing",
                                    text: "On-screen writing",
                                    detail: "(notetaking, drawing, marking-up photos)",
                                    icon: "./assets/help_me_choose/writing_icon.png"
                                },
                                {
                                    id: "usb-a-ports",
                                    text: "USB-A ports",
                                    icon: "./assets/help_me_choose/usb_icon.png"
                                },
                                {
                                    id: "usb-c-ports",
                                    text: "USB-C ports",
                                    icon: "./assets/help_me_choose/usb_icon.png"
                                },
                                {
                                    id: "headphone-jack",
                                    text: "3.5mm Headphone jack",
                                    icon: "./assets/help_me_choose/headphone_icon.png"
                                },
                                {
                                    id: "none-of-these",
                                    text: "None of these",
                                    icon: "./assets/help_me_choose/none_icon.png",
                                    excluding: true
                                }
                            ]
                        },
                        {
                            id: "loading",
                            type: "loading",
                            title: "We're finding your perfect Surface..."
                        },
                        {
                            id: "results",
                            type: "results",
                            title: "Based on your selections, you might like this",
                            restartBtnText: "Start over"
                        }
                    ]
                },
                {
                    id: "compare",
                    text: "View side-by-side",
                    icon: "./assets/compare_section_icon.png",
                    image: "./assets/compare_section.jpg",
                    comparisonTable: {
                        showDetailsBtn: "Show details",
                        closeBtn: "Close",
                        moreSpecs: "More specs",
                        lessSpecs: "Less specs",
                        backBtn: "Back",
                        specsToShow: [
                            {
                                id: "screen",
                                name: "Screen"
                            },
                            {
                                id: "processor",
                                name: "Processor"
                            },
                            {
                                id: "memory",
                                name: "Memory"
                            },
                            {
                                id: "battery",
                                name: "Battery Life"
                            },
                            {
                                id: "storage",
                                name: "Storage"
                            },
                            {
                                id: "connections",
                                name: "Connections"
                            }
                        ]
                    }
                }
            ]
        }
    }
};
