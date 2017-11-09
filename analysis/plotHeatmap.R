library(pheatmap)

matrix0 = read.table(file="/ngs-data1/IIRU/ZSF1/Results/analysis/comp_pathway_hu_and_rat_glomeruli.txt", header=TRUE,sep="\t",check.names=FALSE)

matrix <- subset( matrix0, select = -human_glomeruli_T2D )

pheatmap(matrix, display_numbers = TRUE, cluster_cols=FALSE, fontsize_number = 12,fontsize = 12, number_color = "black", width = 10, height = 8, filename = "comp_pathway_hu_and_rat_glomeruli.pdf")

