  // Sample project data
  const projects = [
    {
      id: "1",
      title: "fraLSG1910eb_teamA_first-try",
      sourceLanguage: "English",
      sourceCode: "eng",
      targetLanguage: "French",
      targetCode: "fra",
      lastUpdatedBy: "Maria",
      lastUpdatedOn: "Titus",
      timestamp: "02/19/25 04:30",
      progress: 50,
      totalChapters: 172,
      translatedChapters: 87,
      hasText: true,
      hasAudio: false,
      hasImages: true,
      hasTable: true,
      hasMap: true,
    },
    {
      id: "2",
      title: "fraLSG1910eb_teamA_first-try",
      sourceLanguage: "English",
      sourceCode: "eng",
      targetLanguage: "French",
      targetCode: "fra",
      lastUpdatedBy: "Maria",
      lastUpdatedOn: "Titus",
      timestamp: "02/19/25 04:30",
      progress: 60,
      totalChapters: 172,
      translatedChapters: 87,
      hasText: true,
      hasAudio: false,
      hasImages: true,
      hasTable: true,
      hasMap: true,
      hasVideo: true,
    },
    {
      id: "3",
      title: "fraLSG1910eb_teamA_first-try",
      sourceLanguage: "English",
      sourceCode: "eng",
      targetLanguage: "French",
      targetCode: "fra",
      lastUpdatedBy: "Maria",
      lastUpdatedOn: "Titus",
      timestamp: "02/19/25 04:30",
      progress: 20,
      totalChapters: 172,
      translatedChapters: 87,
      hasText: true,
      hasAudio: false,
      hasImages: true,
      hasTable: true,
      hasMap: true,
      hasVideo: false,
    },
    {
      id: "4",
      title: "fraLSG1910eb_teamA_first-try",
      sourceLanguage: "English",
      sourceCode: "eng",
      targetLanguage: "French",
      targetCode: "fra",
      lastUpdatedBy: "Maria",
      lastUpdatedOn: "Titus",
      timestamp: "02/19/25 04:30",
      progress: 30,
      totalChapters: 172,
      translatedChapters: 87,
      hasText: true,
      hasAudio: false,
      hasImages: true,
      hasTable: true,
      hasMap: true,
      hasVideo: true,
    },
    {
      id: "5",
      title: "fraLSG1910eb_teamA_first-try",
      sourceLanguage: "English",
      sourceCode: "eng",
      targetLanguage: "French",
      targetCode: "fra",
      lastUpdatedBy: "Maria",
      lastUpdatedOn: "Titus",
      timestamp: "02/19/25 04:30",
      progress: 60,
      totalChapters: 172,
      translatedChapters: 87,
      hasText: true,
      hasAudio: false,
      hasImages: true,
      hasTable: true,
      hasMap: true,
      hasVideo: true,
    },
  ]

  export default projects;

  export type Project = {
    id: string;
    title: string;
    sourceLanguage: string;
    sourceCode: string;
    targetLanguage: string;
    targetCode: string;
    lastUpdatedBy: string;
    lastUpdatedOn: string;
    timestamp: string;
    progress: number;
    totalChapters: number;
    translatedChapters: number;
    hasText: boolean;
    hasAudio: boolean;
    hasImages: boolean;
    hasTable: boolean;
    hasMap: boolean;
    hasVideo: boolean;
  }