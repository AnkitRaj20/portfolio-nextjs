"use client";

import { useState } from "react";
import { saveContent, uploadFile } from "../actions";
import { NavbarLogo } from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, X, ChevronDown, ChevronUp, Upload } from "lucide-react";
import Image from "next/image";

export default function DashboardClient({ initialContent }: { initialContent: any }) {
  const [content, setContent] = useState(initialContent);
  const [activeTab, setActiveTab] = useState("profile");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [savingSection, setSavingSection] = useState<string | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await saveContent(content);
      setMessage(res.message);
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("An error occurred while saving.");
    }
    setSaving(false);
  };

  const handleSaveSection = async (section: string) => {
    setSavingSection(section);
    setMessage("");
    try {
      const res = await saveContent(content);
      setMessage(res.message);
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("An error occurred while saving.");
    }
    setSavingSection(null);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldPath: string[]) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await uploadFile(formData);
      if (res.success && res.filePath) {
        // Update content with new file path
        setContent((prev: any) => {
           const newContent = { ...prev };
           let current = newContent;
           for (let i = 0; i < fieldPath.length - 1; i++) {
              current = current[fieldPath[i]];
           }
           current[fieldPath[fieldPath.length - 1]] = res.filePath;
           return newContent;
        });
        alert("File uploaded successfully!");
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading file.");
    }
  };

  const updateNavbar = (field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      navbar: { ...prev.navbar, [field]: value },
    }));
  };
  
   const updateNavbarLogo = (field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      navbar: { 
          ...prev.navbar, 
          logo: { ...prev.navbar.logo, [field]: value } 
      },
    }));
  };

  const updateProject = (index: number, field: string, value: any) => {
    const newProjects = [...content.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setContent((prev: any) => ({ ...prev, projects: newProjects }));
  };

  const addProject = () => {
    const newProjectId = Date.now().toString();
    const newProject = {
      id: newProjectId,
      name: "New Project",
      description: "",
      detailedDescription: "",
      image: "",
      languagesUsed: [],
      isFeatured: false,
      status: "In Progress",
      features: [],
      github: "",
      url: "",
      links: [],
      tag: "fullstack",
      sequence: 0
    };
    // Add to the START of the list
    setContent((prev: any) => ({ ...prev, projects: [newProject, ...prev.projects] }));
    // Auto-expand the new project
    setExpandedProject(newProjectId);
  };

  const removeProject = (e: React.MouseEvent, index: number) => {
    e.stopPropagation(); // Prevent toggling accordion
    if (confirm("Are you sure you want to delete this project?")) {
        const newProjects = content.projects.filter((_: any, i: number) => i !== index);
        setContent((prev: any) => ({ ...prev, projects: newProjects }));
    }
  };

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const updateArrayField = (projectIndex: number, field: string, arrayIndex: number, value: any) => {
      const newProjects = [...content.projects];
      const newArray = [...newProjects[projectIndex][field]];
      newArray[arrayIndex] = value;
      newProjects[projectIndex] = { ...newProjects[projectIndex], [field]: newArray };
      setContent((prev: any) => ({ ...prev, projects: newProjects }));
  };

  const addArrayItem = (projectIndex: number, field: string) => {
      const newProjects = [...content.projects];
      const newArray = [...(newProjects[projectIndex][field] || []), ""]; // Ensure it's an array
      newProjects[projectIndex] = { ...newProjects[projectIndex], [field]: newArray };
      setContent((prev: any) => ({ ...prev, projects: newProjects }));
  };

  const removeArrayItem = (projectIndex: number, field: string, arrayIndex: number) => {
      const newProjects = [...content.projects];
      const newArray = newProjects[projectIndex][field].filter((_: any, i: number) => i !== arrayIndex);
      newProjects[projectIndex] = { ...newProjects[projectIndex], [field]: newArray };
      setContent((prev: any) => ({ ...prev, projects: newProjects }));
  };

  // Helper for deeply nested updates
  const updateNested = (path: string[], value: any) => {
      setContent((prev: any) => {
          const newContent = { ...prev };
          let current = newContent;
          for (let i = 0; i < path.length - 1; i++) {
              current = current[path[i]];
          }
           current[path[path.length - 1]] = value;
           return newContent;
      });
  };

  // For Roles in Hero
  const updateRole = (index: number, value: string) => {
     const newRoles = [...content.hero.roles];
     newRoles[index] = value;
     updateNested(["hero", "roles"], newRoles);
  };
  const addRole = () => updateNested(["hero", "roles"], [...content.hero.roles, ""]);
  const removeRole = (index: number) => updateNested(["hero", "roles"], content.hero.roles.filter((_:any, i:number) => i !== index));

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
        <div className="flex items-center gap-4">
          <NavbarLogo />
          <h1 className="text-xl font-bold dark:text-white">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          {message && (
             <span className={`text-sm font-medium ${message.includes("Success") || message.includes("success") ? "text-green-600" : "text-blue-600"}`}>
                {message}
             </span>
          )}
          {activeTab !== "profile" && (
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6">
        {/* Tabs */}
        <div className="mb-8 flex space-x-4 border-b border-neutral-200 dark:border-neutral-800">
          {["profile", "timeline", "projects", "navbar"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-black text-black dark:border-white dark:text-white"
                  : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {activeTab === "profile" && (
            <div className="grid gap-8">
                {/* Hero & About */}
                 <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-neutral-900">
                     <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold dark:text-white">Profile Details</h2>
                        <Button onClick={() => handleSaveSection("details")} disabled={savingSection === "details"}>
                            {savingSection === "details" ? "Saving..." : "Save Details"}
                        </Button>
                     </div>
                     
                     <div className="grid gap-6 md:grid-cols-2">
                        {/* Hero Section */}
                         <div className="space-y-4">
                             <h3 className="font-medium text-neutral-500 dark:text-neutral-400">Hero Section</h3>
                             <div>
                                 <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Name</label>
                                 <input
                                    value={content.hero.name}
                                    onChange={(e) => updateNested(["hero", "name"], e.target.value)}
                                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                  />
                             </div>
                             <div>
                                 <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Roles (Typewriter)</label>
                                 {content.hero.roles.map((role: string, idx: number) => (
                                     <div key={idx} className="mb-2 flex gap-2">
                                         <input value={role} onChange={(e) => updateRole(idx, e.target.value)} className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
                                         <Button variant="ghost" size="icon" onClick={() => removeRole(idx)}> <Trash2 className="h-4 w-4 text-red-500" /> </Button>
                                     </div>
                                 ))}
                                 <Button variant="outline" size="sm" onClick={addRole}><Plus className="mr-2 h-4 w-4" /> Add Role</Button>
                             </div>
                             <div>
                                 <label className="mb-1 block text-sm font-medium dark:text-neutral-300">LinkedIn URL</label>
                                 <input
                                    value={content.hero.social.linkedin}
                                    onChange={(e) => updateNested(["hero", "social", "linkedin"], e.target.value)}
                                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                  />
                             </div>
                         </div>

                         {/* About Section */}
                         <div className="space-y-4">
                             <h3 className="font-medium text-neutral-500 dark:text-neutral-400">About Me</h3>
                             <div>
                                 <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Heading</label>
                                 <input
                                    value={content.about.heading}
                                    onChange={(e) => updateNested(["about", "heading"], e.target.value)}
                                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                  />
                             </div>
                             <div>
                                 <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Description</label>
                                 <textarea
                                    value={content.about.description}
                                    onChange={(e) => updateNested(["about", "description"], e.target.value)}
                                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                    rows={6}
                                  />
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Files & Resume */}
                 <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-neutral-900">
                     <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold dark:text-white">Documents & Images</h2>
                        <Button onClick={() => handleSaveSection("files")} disabled={savingSection === "files"}>
                            {savingSection === "files" ? "Saving..." : "Save Files Info"}
                        </Button>
                     </div>
                     <div className="grid gap-6 md:grid-cols-2">
                         {/* Profile Image */}
                         <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
                             <h3 className="mb-4 font-medium">Profile Image</h3>
                             <div className="flex items-center gap-4">
                                 {content.about.image && (
                                     <Image src={content.about.image} alt="Profile" width={80} height={80} className="rounded-full object-cover" />
                                 )}
                                 <div className="flex-1">
                                     <input 
                                        type="text" 
                                        value={content.about.image} 
                                        onChange={(e) => updateNested(["about", "image"], e.target.value)}
                                        className="mb-2 w-full text-sm p-2 border rounded"
                                        placeholder="Image path"
                                     />
                                     <div className="relative">
                                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => handleFileUpload(e, ["about", "image"])} />
                                        <Button variant="secondary" size="sm" className="w-full"> <Upload className="mr-2 h-4 w-4" /> Upload New Image </Button>
                                     </div>
                                 </div>
                             </div>
                         </div>

                         {/* Resume */}
                         <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
                             <h3 className="mb-4 font-medium">Resume</h3>
                             <div className="space-y-4">
                                 <p className="text-sm text-neutral-500">Current: <a href={content.navbar.resume.link} target="_blank" className="text-blue-500 hover:underline">{content.navbar.resume.text}</a></p>
                                 <div className="relative">
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => handleFileUpload(e, ["navbar", "resume", "link"])} />
                                    <Button variant="secondary" size="sm" className="w-full"> <Upload className="mr-2 h-4 w-4" /> Upload New Resume </Button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Skills */}
                 <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-neutral-900">
                     <div className="mb-6 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <h2 className="text-lg font-semibold dark:text-white">Skills</h2>
                            <Button onClick={() => setContent((prev:any) => ({...prev, skills: [...prev.skills, { name: "", url: "", whiteColor: false }] }))} size="sm" variant="outline">
                                <Plus className="mr-2 h-4 w-4" /> Add Skill
                            </Button>
                         </div>
                         <Button onClick={() => handleSaveSection("skills")} disabled={savingSection === "skills"}>
                            {savingSection === "skills" ? "Saving..." : "Save Skills"}
                        </Button>
                     </div>
                     <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                         {content.skills.map((skill: any, idx: number) => (
                             <div key={idx} className="relative rounded-lg border border-neutral-200 p-3 dark:border-neutral-700">
                                 <button onClick={() => {
                                     const newSkills = content.skills.filter((_:any, i:number) => i !== idx);
                                     setContent((prev:any) => ({...prev, skills: newSkills}));
                                 }} className="absolute right-2 top-2 text-neutral-400 hover:text-red-500">
                                     <X className="h-4 w-4" />
                                 </button>
                                 <div className="mt-2 space-y-2">
                                     <input 
                                        placeholder="Skill Name" 
                                        value={skill.name} 
                                        onChange={(e) => {
                                            const newSkills = [...content.skills];
                                            newSkills[idx].name = e.target.value;
                                            setContent((prev:any) => ({...prev, skills: newSkills}));
                                        }}
                                        className="w-full border-b bg-transparent p-1 text-sm outline-none" 
                                      />
                                      <input 
                                        placeholder="Icon URL" 
                                        value={skill.url} 
                                        onChange={(e) => {
                                            const newSkills = [...content.skills];
                                            newSkills[idx].url = e.target.value;
                                            setContent((prev:any) => ({...prev, skills: newSkills}));
                                        }}
                                        className="w-full border-b bg-transparent p-1 text-xs text-neutral-500 outline-none" 
                                      />
                                      <div className="flex items-center gap-2">
                                          <input 
                                            type="checkbox" 
                                            checked={skill.whiteColor} 
                                            onChange={(e) => {
                                                const newSkills = [...content.skills];
                                                newSkills[idx].whiteColor = e.target.checked;
                                                setContent((prev:any) => ({...prev, skills: newSkills}));
                                            }}
                                          />
                                          <span className="text-xs text-neutral-500">White Background?</span>
                                      </div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
            </div>
          )}


          {activeTab === "navbar" && (
            <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm dark:bg-neutral-900">
              <h2 className="text-lg font-semibold dark:text-white">Navbar Settings</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                 <div>
                  <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Logo Text</label>
                  <input
                    type="text"
                    value={content.navbar.logo.text}
                    onChange={(e) => updateNavbarLogo("text", e.target.value)}
                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
                 <div>
                  <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Logo Image Path</label>
                  <input
                    type="text"
                    value={content.navbar.logo.image}
                    onChange={(e) => updateNavbarLogo("image", e.target.value)}
                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

               <div>
                 <h3 className="mb-2 font-medium dark:text-neutral-200">Links</h3>
                 {content.navbar.links.map((link: any, idx: number) => (
                    <div key={idx} className="mb-2 flex gap-2">
                       <input 
                          value={link.name} 
                          onChange={(e) => {
                             const newLinks = [...content.navbar.links];
                             newLinks[idx].name = e.target.value;
                             updateNavbar("links", newLinks);
                          }}
                          className="w-1/3 rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                        />
                         <input 
                          value={link.link} 
                          onChange={(e) => {
                             const newLinks = [...content.navbar.links];
                             newLinks[idx].link = e.target.value;
                             updateNavbar("links", newLinks);
                          }}
                          className="w-2/3 rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                        />
                    </div>
                 ))}
               </div>
                <div className="flex justify-end pt-4">
                   <Button onClick={handleSave} disabled={saving}>
                     {saving ? "Saving..." : "Save Changes"}
                   </Button>
                 </div>
            </div>
          )}

          {activeTab === "timeline" && (
              <div className="space-y-8">
                 <div className="flex justify-between items-center rounded-xl bg-white p-6 shadow-sm dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-semibold dark:text-white">Timeline Journey</h2>
                        <Button onClick={() => setContent((prev:any) => ({...prev, timeline: [{ Date: "Present", title: "New Role", School: "Organization", location: "Location", description: "Description", type: "work" }, ...(prev.timeline || [])] }))} size="sm" variant="outline">
                             <Plus className="mr-2 h-4 w-4" /> Add Item
                         </Button>
                    </div>
                    <Button onClick={() => handleSaveSection("timeline")} disabled={savingSection === "timeline"}>
                        {savingSection === "timeline" ? "Saving..." : "Save Timeline"}
                    </Button>
                 </div>

                 <div className="space-y-4">
                     {content.timeline?.map((item: any, idx: number) => (
                         <div key={idx} className="relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                              <button onClick={() => {
                                 const newTimeline = content.timeline.filter((_:any, i:number) => i !== idx);
                                 setContent((prev:any) => ({...prev, timeline: newTimeline}));
                             }} className="absolute right-4 top-4 text-neutral-400 hover:text-red-500">
                                 <Trash2 className="h-5 w-5" />
                             </button>
                             
                             <div className="grid gap-4 md:grid-cols-2">
                                 <div>
                                     <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Date / Period</label>
                                     <input 
                                        value={item.Date} 
                                        onChange={(e) => {
                                            const newTimeline = [...content.timeline];
                                            newTimeline[idx].Date = e.target.value;
                                            setContent((prev:any) => ({...prev, timeline: newTimeline}));
                                        }}
                                        className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                     />
                                 </div>
                                  <div>
                                     <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Role / Title</label>
                                     <input 
                                        value={item.title} 
                                        onChange={(e) => {
                                            const newTimeline = [...content.timeline];
                                            newTimeline[idx].title = e.target.value;
                                            setContent((prev:any) => ({...prev, timeline: newTimeline}));
                                        }}
                                        className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                     />
                                 </div>
                                  <div>
                                     <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Organization / School</label>
                                     <input 
                                        value={item.School} 
                                        onChange={(e) => {
                                            const newTimeline = [...content.timeline];
                                            newTimeline[idx].School = e.target.value;
                                            setContent((prev:any) => ({...prev, timeline: newTimeline}));
                                        }}
                                        className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                     />
                                 </div>
                                  <div>
                                     <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Location</label>
                                     <input 
                                        value={item.location} 
                                        onChange={(e) => {
                                            const newTimeline = [...content.timeline];
                                            newTimeline[idx].location = e.target.value;
                                            setContent((prev:any) => ({...prev, timeline: newTimeline}));
                                        }}
                                        className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                     />
                                 </div>
                             </div>
                             <div className="mt-4">
                                  <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Description</label>
                                  <textarea 
                                    value={item.description} 
                                    onChange={(e) => {
                                        const newTimeline = [...content.timeline];
                                        newTimeline[idx].description = e.target.value;
                                        setContent((prev:any) => ({...prev, timeline: newTimeline}));
                                    }}
                                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                    rows={3}
                                  />
                             </div>
                              <div className="mt-4 flex gap-4">
                                  <label className="flex items-center gap-2">
                                      <input 
                                        type="radio" 
                                        name={`type-${idx}`}
                                        checked={item.type === 'work'}
                                        onChange={() => {
                                            const newTimeline = [...content.timeline];
                                            newTimeline[idx].type = 'work';
                                            setContent((prev:any) => ({...prev, timeline: newTimeline}));
                                        }}
                                      />
                                      <span className="text-sm dark:text-neutral-300">Work</span>
                                  </label>
                                   <label className="flex items-center gap-2">
                                      <input 
                                        type="radio" 
                                        name={`type-${idx}`}
                                        checked={item.type === 'education'}
                                        onChange={() => {
                                            const newTimeline = [...content.timeline];
                                            newTimeline[idx].type = 'education';
                                            setContent((prev:any) => ({...prev, timeline: newTimeline}));
                                        }}
                                      />
                                      <span className="text-sm dark:text-neutral-300">Education</span>
                                  </label>
                              </div>
                         </div>
                     ))}
                 </div>
              </div>
          )}

          {activeTab === "projects" && (
             <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold dark:text-white">All Projects</h2>
                    <Button onClick={addProject} className="flex items-center gap-2">
                        <Plus className="h-4 w-4" /> Add Project
                    </Button>
                </div>
                
                {content.projects.map((project: any, idx: number) => {
                   const isExpanded = expandedProject === (project.id || idx.toString());
                   return (
                   <div key={project.id || idx} className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900 transition-all">
                      {/* Accordion Header */}
                      <div 
                        className="flex cursor-pointer items-center justify-between p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                        onClick={() => toggleProject(project.id || idx.toString())}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isExpanded ? "bg-black text-white dark:bg-white dark:text-black" : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"}`}>
                                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </div>
                            <div>
                                <h3 className="font-semibold dark:text-white">{project.name || "Untitled Project"}</h3>
                                <p className="text-xs text-neutral-500">{project.status}</p>
                            </div>
                         </div>
                         <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={(e) => removeProject(e, idx)} 
                            className="text-neutral-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
                         >
                             <Trash2 className="h-5 w-5" />
                         </Button>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                      <div className="border-t border-neutral-100 p-6 dark:border-neutral-800">
                      <div className="grid gap-6">
                        {/* Basic Info */}
                         <div className="grid gap-4 md:grid-cols-2">
                            <div>
                               <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Project Name</label>
                                <input
                                   type="text"
                                   value={project.name}
                                   onChange={(e) => updateProject(idx, "name", e.target.value)}
                                   className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                   placeholder="Project Name"
                                 />
                            </div>
                             <div>
                               <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Status</label>
                                <input
                                   type="text"
                                   value={project.status}
                                   onChange={(e) => updateProject(idx, "status", e.target.value)}
                                   className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                   placeholder="e.g. Live, In Progress"
                                 />
                            </div>
                         </div>
                         
                         {/* Details */}
                         <div className="grid gap-4 md:grid-cols-2">
                             <div>
                                <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Short Description</label>
                                 <textarea
                                    value={project.description}
                                    onChange={(e) => updateProject(idx, "description", e.target.value)}
                                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                    rows={3}
                                  />
                             </div>
                             <div>
                                <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Detailed Description</label>
                                 <textarea
                                    value={project.detailedDescription}
                                    onChange={(e) => updateProject(idx, "detailedDescription", e.target.value)}
                                    className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                    rows={3}
                                  />
                             </div>
                         </div>

                        {/* Config */}
                        <div className="grid gap-4 md:grid-cols-3">
                             <div>
                               <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Tag (Category)</label>
                                <input
                                   type="text"
                                   value={project.tag}
                                   onChange={(e) => updateProject(idx, "tag", e.target.value)}
                                   className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                 />
                            </div>
                             <div>
                               <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Sequence</label>
                                <input
                                   type="number"
                                   value={project.sequence}
                                   onChange={(e) => updateProject(idx, "sequence", parseInt(e.target.value))}
                                   className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                 />
                            </div>
                            <div className="flex items-center gap-2 pt-6">
                                <input
                                   type="checkbox"
                                   id={`featured-${idx}`}
                                   checked={project.isFeatured}
                                   className="h-4 w-4"
                                   onChange={(e) => updateProject(idx, "isFeatured", e.target.checked)}
                                 />
                                 <label htmlFor={`featured-${idx}`} className="text-sm font-medium dark:text-neutral-300">Is Featured?</label>
                            </div>
                        </div>

                        {/* Links/Images */}
                         <div className="grid gap-4 md:grid-cols-3">
                            <div>
                               <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Image Path</label>
                                <input
                                   type="text"
                                   value={project.image}
                                   onChange={(e) => updateProject(idx, "image", e.target.value)}
                                   className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                   placeholder="/images/example.png"
                                 />
                            </div>
                             <div>
                               <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Github URL</label>
                                <input
                                   type="text"
                                   value={project.github}
                                   onChange={(e) => updateProject(idx, "github", e.target.value)}
                                   className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                 />
                            </div>
                             <div>
                               <label className="mb-1 block text-sm font-medium dark:text-neutral-300">Live URL</label>
                                <input
                                   type="text"
                                   value={project.url || ""}
                                   onChange={(e) => updateProject(idx, "url", e.target.value)}
                                   className="w-full rounded-md border border-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                                 />
                            </div>
                        </div>

                        {/* Array Fields */}
                        <div className="grid gap-6 md:grid-cols-2">
                             {/* Features */}
                             <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                                <div className="mb-2 flex items-center justify-between">
                                    <label className="text-sm font-medium dark:text-neutral-300">Features</label>
                                    <Button variant="outline" size="sm" onClick={() => addArrayItem(idx, "features")}>
                                        <Plus className="mr-1 h-3 w-3" /> Add
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    {project.features?.map((feature: string, fIdx: number) => (
                                        <div key={fIdx} className="flex gap-2">
                                            <input
                                                value={feature}
                                                onChange={(e) => updateArrayField(idx, "features", fIdx, e.target.value)}
                                                className="w-full rounded-md border border-neutral-300 p-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
                                            />
                                            <Button variant="ghost" size="icon" onClick={() => removeArrayItem(idx, "features", fIdx)} className="h-9 w-9 shrink-0 text-neutral-400 hover:text-red-500">
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                             </div>

                             {/* Languages/Icons */}
                             <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                                <div className="mb-2 flex items-center justify-between">
                                    <label className="text-sm font-medium dark:text-neutral-300">Tech Stack Icons (URLs)</label>
                                    <Button variant="outline" size="sm" onClick={() => addArrayItem(idx, "languagesUsed")}>
                                        <Plus className="mr-1 h-3 w-3" /> Add
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    {project.languagesUsed?.map((lang: string, lIdx: number) => (
                                        <div key={lIdx} className="flex gap-2">
                                            <input
                                                value={lang}
                                                onChange={(e) => updateArrayField(idx, "languagesUsed", lIdx, e.target.value)}
                                                className="w-full rounded-md border border-neutral-300 p-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
                                            />
                                             <Button variant="ghost" size="icon" onClick={() => removeArrayItem(idx, "languagesUsed", lIdx)} className="h-9 w-9 shrink-0 text-neutral-400 hover:text-red-500">
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>

                      </div>
                      </div>
                      )}
                   </div>
                   );
                })}
             </div>
          )}
        </div>
      </main>
    </div>
  );
}
